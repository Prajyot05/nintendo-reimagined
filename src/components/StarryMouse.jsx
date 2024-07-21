import React, { useEffect } from 'react';

const StarEffect = () => {
  useEffect(() => {
    let stars = [];

    class Star {
      constructor(x, y, velocityX, velocityY) {
        this.x = x;
        this.y = y;
        this.finalSize = Math.random() * 5;
        this.size = this.finalSize * 2; // Starting size is twice the final size
        this.alpha = 1;
        this.velocityX = velocityX * 0.05;
        this.velocityY = 1 + Math.random() + velocityY * 0.05;
        this.gravity = 0.02;
        this.drag = 0.97;
        this.turbulence = () => Math.random() * 0.5 - 0.25;
        this.timeElapsed = 0; // Time since the star was created
      }

      draw() {
        this.element.style.left = `${this.x + 20}px`;
        this.element.style.top = `${this.y + 20}px`;
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;
        this.element.style.opacity = this.alpha;
      }

      update(deltaTime) {
        this.x += this.velocityX + this.turbulence();
        this.velocityX *= this.drag;
        this.y += this.velocityY;
        this.velocityY += this.gravity;
        this.alpha = Math.max(0, this.alpha - 0.05); // Adjust this value to make stars disappear faster

        this.timeElapsed += deltaTime;
        if (this.timeElapsed < 1000) { // Reduce this duration to make the size change quicker
          this.size = this.finalSize * 2 - (this.finalSize * this.timeElapsed / 1000);
        } else {
          this.size = this.finalSize;
        }

        this.draw();
      }

      remove() {
        this.element.remove();
      }
    }

    let lastMouseX = 0;
    let lastMouseY = 0;
    let mouseVelocityX = 0;
    let mouseVelocityY = 0;

    const addStar = (e) => {
      mouseVelocityX = e.clientX - lastMouseX;
      mouseVelocityY = e.clientY - lastMouseY;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;

      let randomOffsetX = (Math.random() - 0.5) * 100; 
      let randomOffsetY = (Math.random() - 0.5) * 100;

      const star = new Star(e.clientX, e.clientY, mouseVelocityX + randomOffsetX, mouseVelocityY + randomOffsetY);
      star.element = document.createElement('div');
      star.element.className = 'star z-[9999]';
      document.body.appendChild(star.element);

      stars.push(star);
    };

    window.addEventListener('mousemove', addStar);
    window.addEventListener('mousedown', addStar);

    const update = (time = 0) => {
      const deltaTime = time - (lastTimeRef.current || time);
      lastTimeRef.current = time;

      stars.forEach(star => star.update(deltaTime));
      stars = stars.filter(star => {
        if (star.alpha > 0 && star.y < window.innerHeight && star.x > 0 && star.x < window.innerWidth) {
          return true;
        } else {
          star.remove();
          return false;
        }
      });

      requestAnimationFrame(update);
    };

    let lastTimeRef = { current: 0 };
    update();

    return () => {
      window.removeEventListener('mousemove', addStar);
      window.removeEventListener('mousedown', addStar);
    };
  }, []);

  return null;
};

export default StarEffect;