const ctx = new AudioContext();

function beep() {
  const osc = ctx.createOscillator();
  osc.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.2); // plays for 0.2s
}
