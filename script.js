<script>
  const rainContainer = document.querySelector('.rain-bg');

  const lineCount = 50;

  for (let i = 0; i < lineCount; i++) {
    const line = document.createElement('div');
    line.className = 'rain-line';

    line.style.left = Math.random() * 100 + 'vw';
    line.style.height = 80 + Math.random() * 180 + 'px';
    line.style.animationDuration = 1.2 + Math.random() * 1.8 + 's';
    line.style.animationDelay = Math.random() * 2 + 's';
    line.style.opacity = 0.08 + Math.random() * 0.35;

    rainContainer.appendChild(line);
  }
</script>
