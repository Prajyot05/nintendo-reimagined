import React, { useEffect, useRef } from 'react';

const MAX_STARS = 40;
const THROTTLE_MS = 50;

const StarEffect = () => {
  const starsRef = useRef([]);
  const lastTimeRef = useRef(0);
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const lastThrottleRef = useRef(0);
  const animFrameRef = useRef(null);
  const poolRef = useRef([]);

  useEffect(() => {
    const stars = starsRef.current;

    const getElement = () => {
      if (poolRef.current.length > 0) {
        const el = poolRef.current.pop();
        el.style.display = 'block';
        return el;
      }
      const el = document.createElement('div');
      el.className = 'star z-[9999]';
      document.body.appendChild(el);
      return el;
    };

    const releaseElement = (el) => {
      el.style.display = 'none';
      poolRef.current.push(el);
    };

    class Star {
      constructor(x, y, velocityX, velocityY, element) {
        this.x = x;
        this.y = y;
        this.finalSize = Math.random() * 5;
        this.size = this.finalSize * 2;
        this.alpha = 1;
        this.velocityX = velocityX * 0.05;
        this.velocityY = 1 + Math.random() + velocityY * 0.05;
        this.gravity = 0.02;
        this.drag = 0.97;
        this.timeElapsed = 0;
        this.element = element;
      }

      draw() {
        this.element.style.left = `${this.x + 20}px`;
        this.element.style.top = `${this.y + 20}px`;
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;
        this.element.style.opacity = this.alpha;
      }

      update(deltaTime) {
        this.x += this.velocityX + (Math.random() * 0.5 - 0.25);
        this.velocityX *= this.drag;
        this.y += this.velocityY;
        this.velocityY += this.gravity;
        this.alpha = Math.max(0, this.alpha - 0.05);

        this.timeElapsed += deltaTime;
        if (this.timeElapsed < 800) {
          this.size = this.finalSize * 2 - (this.finalSize * this.timeElapsed / 800);
        } else {
          this.size = this.finalSize;
        }

        this.draw();
      }
    }

    const addStar = (e) => {
      const now = Date.now();
      if (now - lastThrottleRef.current < THROTTLE_MS) return;
      lastThrottleRef.current = now;

      const mouseVelocityX = e.clientX - lastMouseRef.current.x;
      const mouseVelocityY = e.clientY - lastMouseRef.current.y;
      lastMouseRef.current.x = e.clientX;
      lastMouseRef.current.y = e.clientY;

      const randomOffsetX = (Math.random() - 0.5) * 100;
      const randomOffsetY = (Math.random() - 0.5) * 100;

      // Remove oldest stars if at capacity
      while (stars.length >= MAX_STARS) {
        const old = stars.shift();
        releaseElement(old.element);
      }

      const element = getElement();
      const star = new Star(
        e.clientX, e.clientY,
        mouseVelocityX + randomOffsetX,
        mouseVelocityY + randomOffsetY,
        element
      );
      stars.push(star);
    };

    window.addEventListener('mousemove', addStar);

    const update = (time = 0) => {
      const deltaTime = time - (lastTimeRef.current || time);
      lastTimeRef.current = time;

      for (let i = stars.length - 1; i >= 0; i--) {
        const star = stars[i];
        star.update(deltaTime);
        if (star.alpha <= 0 || star.y > window.innerHeight || star.x < 0 || star.x > window.innerWidth) {
          releaseElement(star.element);
          stars.splice(i, 1);
        }
      }

      animFrameRef.current = requestAnimationFrame(update);
    };

    animFrameRef.current = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('mousemove', addStar);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      stars.forEach(star => {
        if (star.element.parentNode) star.element.parentNode.removeChild(star.element);
      });
      poolRef.current.forEach(el => {
        if (el.parentNode) el.parentNode.removeChild(el);
      });
      starsRef.current = [];
      poolRef.current = [];
    };
  }, []);

  return null;
};

export default StarEffect;