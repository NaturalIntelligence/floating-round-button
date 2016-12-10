function menuAnimation(el){
    var menuBounce = new Bounce();
    menuBounce
      .translate({
        from: { x: 0, y: 100 },
        to: { x: 0, y: 0 },
        duration: 600,
        stiffness: 4
      })
      .scale({
        from: { x: 1, y: 1 },
        to: { x: 0.1, y: 2.3 },
        easing: "sway",
        duration: 800,
        delay: 65,
        stiffness: 3
      })
      .scale({
        from: { x: 1, y: 1},
        to: { x: 5, y: 1 },
        easing: "sway",
        duration: 300,
        delay: 30,
      })
      .applyTo(el);
}
function mainAnimation(el){
    var bounce = new Bounce();
    bounce
      .scale({
        from: { x: 0.5, y: 1 },
        to: { x:1, y: 1 },
        easing: "bounce",
        duration: 1000,
        delay: 0,
        stiffness: 1,
        bounces: 4
      })
      .scale({
        from: { x: 1, y: 0.5},
        to: { x: 1, y: 1 },
        easing: "bounce",
        duration: 1000,
        delay: 0,
        stiffness: 1,
        bounces: 4
      })
      .applyTo(el);
}