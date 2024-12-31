const navbar = document.querySelector('.navbar');
    const tracer = document.querySelector('.tracer');
    const links = document.querySelectorAll('.navbar a');

    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        const rect = link.getBoundingClientRect();
        const navbarRect = navbar.getBoundingClientRect();

        tracer.style.width = `${rect.width}px`;
        tracer.style.left = `${rect.left - navbarRect.left}px`;
      });
    });

    navbar.addEventListener('mouseleave', () => {
      tracer.style.width = '0';
    });