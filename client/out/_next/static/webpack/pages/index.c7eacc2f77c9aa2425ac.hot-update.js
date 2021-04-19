webpackHotUpdate_N_E("pages/index",{

/***/ "./components/libs/Particles.js":
/*!**************************************!*\
  !*** ./components/libs/Particles.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */
var pJS = function pJS(tag_id, params) {
  var canvas_el = document.querySelector('#' + tag_id + ' > .particles-js-canvas-el');
  /* particles.js variables with default values */

  this.pJS = {
    canvas: {
      el: canvas_el,
      w: canvas_el.offsetWidth,
      h: canvas_el.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#fff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#ff0000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: '',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 20,
        random: false,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 3000,
          rotateY: 3000
        }
      },
      array: []
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 200,
          size: 80,
          duration: 0.4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      },
      mouse: {}
    },
    retina_detect: false,
    fn: {
      interact: {},
      modes: {},
      vendors: {}
    },
    tmp: {}
  };
  var pJS = this.pJS;
  /* params settings */

  if (params) {
    Object.deepExtend(pJS, params);
  }

  pJS.tmp.obj = {
    size_value: pJS.particles.size.value,
    size_anim_speed: pJS.particles.size.anim.speed,
    move_speed: pJS.particles.move.speed,
    line_linked_distance: pJS.particles.line_linked.distance,
    line_linked_width: pJS.particles.line_linked.width,
    mode_grab_distance: pJS.interactivity.modes.grab.distance,
    mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
    mode_bubble_size: pJS.interactivity.modes.bubble.size,
    mode_repulse_distance: pJS.interactivity.modes.repulse.distance
  };

  pJS.fn.retinaInit = function () {
    if (pJS.retina_detect && window.devicePixelRatio > 1) {
      pJS.canvas.pxratio = window.devicePixelRatio;
      pJS.tmp.retina = true;
    } else {
      pJS.canvas.pxratio = 1;
      pJS.tmp.retina = false;
    }

    pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
    pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;
    pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
    pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
    pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
    pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
    pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
    pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;
  };
  /* ---------- pJS functions - canvas ------------ */


  pJS.fn.canvasInit = function () {
    pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
  };

  pJS.fn.canvasSize = function () {
    pJS.canvas.el.width = pJS.canvas.w;
    pJS.canvas.el.height = pJS.canvas.h;

    if (pJS && pJS.interactivity.events.resize) {
      window.addEventListener('resize', function () {
        pJS.canvas.w = pJS.canvas.el.offsetWidth;
        pJS.canvas.h = pJS.canvas.el.offsetHeight;
        /* resize canvas */

        if (pJS.tmp.retina) {
          pJS.canvas.w *= pJS.canvas.pxratio;
          pJS.canvas.h *= pJS.canvas.pxratio;
        }

        pJS.canvas.el.width = pJS.canvas.w;
        pJS.canvas.el.height = pJS.canvas.h;
        /* repaint canvas on anim disabled */

        if (!pJS.particles.move.enable) {
          pJS.fn.particlesEmpty();
          pJS.fn.particlesCreate();
          pJS.fn.particlesDraw();
          pJS.fn.vendors.densityAutoParticles();
        }
        /* density particles enabled */


        pJS.fn.vendors.densityAutoParticles();
      });
    }
  };

  pJS.fn.canvasPaint = function () {
    pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };

  pJS.fn.canvasClear = function () {
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };
  /* --------- pJS functions - particles ----------- */


  pJS.fn.particle = function (color, opacity, position) {
    /* size */
    this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;

    if (pJS.particles.size.anim.enable) {
      this.size_status = false;
      this.vs = pJS.particles.size.anim.speed / 100;

      if (!pJS.particles.size.anim.sync) {
        this.vs = this.vs * Math.random();
      }
    }
    /* position */


    this.x = position ? position.x : Math.random() * pJS.canvas.w;
    this.y = position ? position.y : Math.random() * pJS.canvas.h;
    /* check position  - into the canvas */

    if (this.x > pJS.canvas.w - this.radius * 2) this.x = this.x - this.radius;else if (this.x < this.radius * 2) this.x = this.x + this.radius;
    if (this.y > pJS.canvas.h - this.radius * 2) this.y = this.y - this.radius;else if (this.y < this.radius * 2) this.y = this.y + this.radius;
    /* check position - avoid overlap */

    if (pJS.particles.move.bounce) {
      pJS.fn.vendors.checkOverlap(this, position);
    }
    /* color */


    this.color = {};

    if (typeof color.value == 'object') {
      if (color.value instanceof Array) {
        var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
        this.color.rgb = hexToRgb(color_selected);
      } else {
        if (color.value.r != undefined && color.value.g != undefined && color.value.b != undefined) {
          this.color.rgb = {
            r: color.value.r,
            g: color.value.g,
            b: color.value.b
          };
        }

        if (color.value.h != undefined && color.value.s != undefined && color.value.l != undefined) {
          this.color.hsl = {
            h: color.value.h,
            s: color.value.s,
            l: color.value.l
          };
        }
      }
    } else if (color.value == 'random') {
      this.color.rgb = {
        r: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
        g: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
        b: Math.floor(Math.random() * (255 - 0 + 1)) + 0
      };
    } else if (typeof color.value == 'string') {
      this.color = color;
      this.color.rgb = hexToRgb(this.color.value);
    }
    /* opacity */


    this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;

    if (pJS.particles.opacity.anim.enable) {
      this.opacity_status = false;
      this.vo = pJS.particles.opacity.anim.speed / 100;

      if (!pJS.particles.opacity.anim.sync) {
        this.vo = this.vo * Math.random();
      }
    }
    /* animation - velocity for speed */


    var velbase = {};

    switch (pJS.particles.move.direction) {
      case 'top':
        velbase = {
          x: 0,
          y: -1
        };
        break;

      case 'top-right':
        velbase = {
          x: 0.5,
          y: -0.5
        };
        break;

      case 'right':
        velbase = {
          x: 1,
          y: -0
        };
        break;

      case 'bottom-right':
        velbase = {
          x: 0.5,
          y: 0.5
        };
        break;

      case 'bottom':
        velbase = {
          x: 0,
          y: 1
        };
        break;

      case 'bottom-left':
        velbase = {
          x: -0.5,
          y: 1
        };
        break;

      case 'left':
        velbase = {
          x: -1,
          y: 0
        };
        break;

      case 'top-left':
        velbase = {
          x: -0.5,
          y: -0.5
        };
        break;

      default:
        velbase = {
          x: 0,
          y: 0
        };
        break;
    }

    if (pJS.particles.move.straight) {
      this.vx = velbase.x;
      this.vy = velbase.y;

      if (pJS.particles.move.random) {
        this.vx = this.vx * Math.random();
        this.vy = this.vy * Math.random();
      }
    } else {
      this.vx = velbase.x + Math.random() - 0.5;
      this.vy = velbase.y + Math.random() - 0.5;
    } // var theta = 2.0 * Math.PI * Math.random();
    // this.vx = Math.cos(theta);
    // this.vy = Math.sin(theta);


    this.vx_i = this.vx;
    this.vy_i = this.vy;
    /* if shape is image */

    var shape_type = pJS.particles.shape.type;

    if (typeof shape_type == 'object') {
      if (shape_type instanceof Array) {
        var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
        this.shape = shape_selected;
      }
    } else {
      this.shape = shape_type;
    }

    if (this.shape == 'image') {
      var sh = pJS.particles.shape;
      this.img = {
        src: sh.image.src,
        ratio: sh.image.width / sh.image.height
      };
      if (!this.img.ratio) this.img.ratio = 1;

      if (pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined) {
        pJS.fn.vendors.createSvgImg(this);

        if (pJS.tmp.pushing) {
          this.img.loaded = false;
        }
      }
    }
  };

  pJS.fn.particle.prototype.draw = function () {
    var p = this;

    if (p.radius_bubble != undefined) {
      var radius = p.radius_bubble;
    } else {
      var radius = p.radius;
    }

    if (p.opacity_bubble != undefined) {
      var opacity = p.opacity_bubble;
    } else {
      var opacity = p.opacity;
    }

    if (p.color.rgb) {
      var color_value = 'rgba(' + p.color.rgb.r + ',' + p.color.rgb.g + ',' + p.color.rgb.b + ',' + opacity + ')';
    } else {
      var color_value = 'hsla(' + p.color.hsl.h + ',' + p.color.hsl.s + '%,' + p.color.hsl.l + '%,' + opacity + ')';
    }

    pJS.canvas.ctx.fillStyle = color_value;
    pJS.canvas.ctx.beginPath();

    switch (p.shape) {
      case 'circle':
        pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
        break;

      case 'edge':
        pJS.canvas.ctx.rect(p.x - radius, p.y - radius, radius * 2, radius * 2);
        break;

      case 'triangle':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius, p.y + radius / 1.66, radius * 2, 3, 2);
        break;

      case 'polygon':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius / (pJS.particles.shape.polygon.nb_sides / 3.5), // startX
        p.y - radius / (2.66 / 3.5), // startY
        radius * 2.66 / (pJS.particles.shape.polygon.nb_sides / 3), // sideLength
        pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
        1 // sideCountDenominator
        );
        break;

      case 'star':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius * 2 / (pJS.particles.shape.polygon.nb_sides / 4), // startX
        p.y - radius / (2 * 2.66 / 3.5), // startY
        radius * 2 * 2.66 / (pJS.particles.shape.polygon.nb_sides / 3), // sideLength
        pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
        2 // sideCountDenominator
        );
        break;

      case 'image':
        var draw = function draw() {
          pJS.canvas.ctx.drawImage(img_obj, p.x - radius, p.y - radius, radius * 2, radius * 2 / p.img.ratio);
        };

        if (pJS.tmp.img_type == 'svg') {
          var img_obj = p.img.obj;
        } else {
          var img_obj = pJS.tmp.img_obj;
        }

        if (img_obj) {
          draw();
        }

        break;
    }

    pJS.canvas.ctx.closePath();

    if (pJS.particles.shape.stroke.width > 0) {
      pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
      pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
      pJS.canvas.ctx.stroke();
    }

    pJS.canvas.ctx.fill();
  };

  pJS.fn.particlesCreate = function () {
    for (var i = 0; i < pJS.particles.number.value; i++) {
      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
    }
  };

  pJS.fn.particlesUpdate = function () {
    for (var i = 0; i < pJS.particles.array.length; i++) {
      /* the particle */
      var p = pJS.particles.array[i]; // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
      // var f = -BANG_SIZE / d;
      // if ( d < BANG_SIZE ) {
      //     var t = Math.atan2( dy, dx );
      //     p.vx = f * Math.cos(t);
      //     p.vy = f * Math.sin(t);
      // }

      /* move the particle */

      if (pJS.particles.move.enable) {
        var ms = pJS.particles.move.speed / 2;
        p.x += p.vx * ms;
        p.y += p.vy * ms;
      }
      /* change opacity status */


      if (pJS.particles.opacity.anim.enable) {
        if (p.opacity_status == true) {
          if (p.opacity >= pJS.particles.opacity.value) p.opacity_status = false;
          p.opacity += p.vo;
        } else {
          if (p.opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true;
          p.opacity -= p.vo;
        }

        if (p.opacity < 0) p.opacity = 0;
      }
      /* change size */


      if (pJS.particles.size.anim.enable) {
        if (p.size_status == true) {
          if (p.radius >= pJS.particles.size.value) p.size_status = false;
          p.radius += p.vs;
        } else {
          if (p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;
          p.radius -= p.vs;
        }

        if (p.radius < 0) p.radius = 0;
      }
      /* change particle position if it is out of canvas */


      if (pJS.particles.move.out_mode == 'bounce') {
        var new_pos = {
          x_left: p.radius,
          x_right: pJS.canvas.w,
          y_top: p.radius,
          y_bottom: pJS.canvas.h
        };
      } else {
        var new_pos = {
          x_left: -p.radius,
          x_right: pJS.canvas.w + p.radius,
          y_top: -p.radius,
          y_bottom: pJS.canvas.h + p.radius
        };
      }

      if (p.x - p.radius > pJS.canvas.w) {
        p.x = new_pos.x_left;
        p.y = Math.random() * pJS.canvas.h;
      } else if (p.x + p.radius < 0) {
        p.x = new_pos.x_right;
        p.y = Math.random() * pJS.canvas.h;
      }

      if (p.y - p.radius > pJS.canvas.h) {
        p.y = new_pos.y_top;
        p.x = Math.random() * pJS.canvas.w;
      } else if (p.y + p.radius < 0) {
        p.y = new_pos.y_bottom;
        p.x = Math.random() * pJS.canvas.w;
      }
      /* out of canvas modes */


      switch (pJS.particles.move.out_mode) {
        case 'bounce':
          if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;else if (p.x - p.radius < 0) p.vx = -p.vx;
          if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;else if (p.y - p.radius < 0) p.vy = -p.vy;
          break;
      }
      /* events */


      if (isInArray('grab', pJS.interactivity.events.onhover.mode)) {
        pJS.fn.modes.grabParticle(p);
      }

      if (isInArray('bubble', pJS.interactivity.events.onhover.mode) || isInArray('bubble', pJS.interactivity.events.onclick.mode)) {
        pJS.fn.modes.bubbleParticle(p);
      }

      if (isInArray('repulse', pJS.interactivity.events.onhover.mode) || isInArray('repulse', pJS.interactivity.events.onclick.mode)) {
        pJS.fn.modes.repulseParticle(p);
      }
      /* interaction auto between particles */


      if (pJS.particles.line_linked.enable || pJS.particles.move.attract.enable) {
        for (var j = i + 1; j < pJS.particles.array.length; j++) {
          var p2 = pJS.particles.array[j];
          /* link particles */

          if (pJS.particles.line_linked.enable) {
            pJS.fn.interact.linkParticles(p, p2);
          }
          /* attract particles */


          if (pJS.particles.move.attract.enable) {
            pJS.fn.interact.attractParticles(p, p2);
          }
          /* bounce particles */


          if (pJS.particles.move.bounce) {
            pJS.fn.interact.bounceParticles(p, p2);
          }
        }
      }
    }
  };

  pJS.fn.particlesDraw = function () {
    /* clear canvas */
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
    /* update each particles param */

    pJS.fn.particlesUpdate();
    /* draw each particle */

    for (var i = 0; i < pJS.particles.array.length; i++) {
      var p = pJS.particles.array[i];
      p.draw();
    }
  };

  pJS.fn.particlesEmpty = function () {
    pJS.particles.array = [];
  };

  pJS.fn.particlesRefresh = function () {
    /* init all */
    cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
    cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
    pJS.tmp.source_svg = undefined;
    pJS.tmp.img_obj = undefined;
    pJS.tmp.count_svg = 0;
    pJS.fn.particlesEmpty();
    pJS.fn.canvasClear();
    /* restart */

    pJS.fn.vendors.start();
  };
  /* ---------- pJS functions - particles interaction ------------ */


  pJS.fn.interact.linkParticles = function (p1, p2) {
    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx * dx + dy * dy);
    /* draw a line between p1 and p2 if the distance between them is under the config distance */

    if (dist <= pJS.particles.line_linked.distance) {
      var opacity_line = pJS.particles.line_linked.opacity - dist / (1 / pJS.particles.line_linked.opacity) / pJS.particles.line_linked.distance;

      if (opacity_line > 0) {
        /* style */
        var color_line = pJS.particles.line_linked.color_rgb_line;
        pJS.canvas.ctx.strokeStyle = 'rgba(' + color_line.r + ',' + color_line.g + ',' + color_line.b + ',' + opacity_line + ')';
        pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width; //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */

        /* path */

        pJS.canvas.ctx.beginPath();
        pJS.canvas.ctx.moveTo(p1.x, p1.y);
        pJS.canvas.ctx.lineTo(p2.x, p2.y);
        pJS.canvas.ctx.stroke();
        pJS.canvas.ctx.closePath();
      }
    }
  };

  pJS.fn.interact.attractParticles = function (p1, p2) {
    /* condensed particles */
    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx * dx + dy * dy);

    if (dist <= pJS.particles.line_linked.distance) {
      var ax = dx / (pJS.particles.move.attract.rotateX * 1000),
          ay = dy / (pJS.particles.move.attract.rotateY * 1000);
      p1.vx -= ax;
      p1.vy -= ay;
      p2.vx += ax;
      p2.vy += ay;
    }
  };

  pJS.fn.interact.bounceParticles = function (p1, p2) {
    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx * dx + dy * dy),
        dist_p = p1.radius + p2.radius;

    if (dist <= dist_p) {
      p1.vx = -p1.vx;
      p1.vy = -p1.vy;
      p2.vx = -p2.vx;
      p2.vy = -p2.vy;
    }
  };
  /* ---------- pJS functions - modes events ------------ */


  pJS.fn.modes.pushParticles = function (nb, pos) {
    pJS.tmp.pushing = true;

    for (var i = 0; i < nb; i++) {
      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value, {
        'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
        'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
      }));

      if (i == nb - 1) {
        if (!pJS.particles.move.enable) {
          pJS.fn.particlesDraw();
        }

        pJS.tmp.pushing = false;
      }
    }
  };

  pJS.fn.modes.removeParticles = function (nb) {
    pJS.particles.array.splice(0, nb);

    if (!pJS.particles.move.enable) {
      pJS.fn.particlesDraw();
    }
  };

  pJS.fn.modes.bubbleParticle = function (p) {
    /* on hover event */
    if (pJS.interactivity.events.onhover.enable && isInArray('bubble', pJS.interactivity.events.onhover.mode)) {
      var init = function init() {
        p.opacity_bubble = p.opacity;
        p.radius_bubble = p.radius;
      };
      /* mousemove - check ratio */


      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse),
          ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;

      if (dist_mouse <= pJS.interactivity.modes.bubble.distance) {
        if (ratio >= 0 && pJS.interactivity.status == 'mousemove') {
          /* size */
          if (pJS.interactivity.modes.bubble.size != pJS.particles.size.value) {
            if (pJS.interactivity.modes.bubble.size > pJS.particles.size.value) {
              var size = p.radius + pJS.interactivity.modes.bubble.size * ratio;

              if (size >= 0) {
                p.radius_bubble = size;
              }
            } else {
              var dif = p.radius - pJS.interactivity.modes.bubble.size,
                  size = p.radius - dif * ratio;

              if (size > 0) {
                p.radius_bubble = size;
              } else {
                p.radius_bubble = 0;
              }
            }
          }
          /* opacity */


          if (pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value) {
            if (pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value) {
              var opacity = pJS.interactivity.modes.bubble.opacity * ratio;

              if (opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity) {
                p.opacity_bubble = opacity;
              }
            } else {
              var opacity = p.opacity - (pJS.particles.opacity.value - pJS.interactivity.modes.bubble.opacity) * ratio;

              if (opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity) {
                p.opacity_bubble = opacity;
              }
            }
          }
        }
      } else {
        init();
      }
      /* mouseleave */


      if (pJS.interactivity.status == 'mouseleave') {
        init();
      }
    }
    /* on click event */
    else if (pJS.interactivity.events.onclick.enable && isInArray('bubble', pJS.interactivity.events.onclick.mode)) {
        var process = function process(bubble_param, particles_param, p_obj_bubble, p_obj, id) {
          if (bubble_param != particles_param) {
            if (!pJS.tmp.bubble_duration_end) {
              if (dist_mouse <= pJS.interactivity.modes.bubble.distance) {
                if (p_obj_bubble != undefined) var obj = p_obj_bubble;else var obj = p_obj;

                if (obj != bubble_param) {
                  var value = p_obj - time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration;
                  if (id == 'size') p.radius_bubble = value;
                  if (id == 'opacity') p.opacity_bubble = value;
                }
              } else {
                if (id == 'size') p.radius_bubble = undefined;
                if (id == 'opacity') p.opacity_bubble = undefined;
              }
            } else {
              if (p_obj_bubble != undefined) {
                var value_tmp = p_obj - time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration,
                    dif = bubble_param - value_tmp;
                value = bubble_param + dif;
                if (id == 'size') p.radius_bubble = value;
                if (id == 'opacity') p.opacity_bubble = value;
              }
            }
          }
        };

        if (pJS.tmp.bubble_clicking) {
          var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x,
              dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y,
              dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse),
              time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time) / 1000;

          if (time_spent > pJS.interactivity.modes.bubble.duration) {
            pJS.tmp.bubble_duration_end = true;
          }

          if (time_spent > pJS.interactivity.modes.bubble.duration * 2) {
            pJS.tmp.bubble_clicking = false;
            pJS.tmp.bubble_duration_end = false;
          }
        }

        if (pJS.tmp.bubble_clicking) {
          /* size */
          process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');
          /* opacity */

          process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
        }
      }
  };

  pJS.fn.modes.repulseParticle = function (p) {
    if (pJS.interactivity.events.onhover.enable && isInArray('repulse', pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == 'mousemove') {
      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
      var normVec = {
        x: dx_mouse / dist_mouse,
        y: dy_mouse / dist_mouse
      },
          repulseRadius = pJS.interactivity.modes.repulse.distance,
          velocity = 100,
          repulseFactor = clamp(1 / repulseRadius * (-1 * Math.pow(dist_mouse / repulseRadius, 2) + 1) * repulseRadius * velocity, 0, 50);
      var pos = {
        x: p.x + normVec.x * repulseFactor,
        y: p.y + normVec.y * repulseFactor
      };

      if (pJS.particles.move.out_mode == 'bounce') {
        if (pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) p.x = pos.x;
        if (pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) p.y = pos.y;
      } else {
        p.x = pos.x;
        p.y = pos.y;
      }
    } else if (pJS.interactivity.events.onclick.enable && isInArray('repulse', pJS.interactivity.events.onclick.mode)) {
      if (!pJS.tmp.repulse_finish) {
        pJS.tmp.repulse_count++;

        if (pJS.tmp.repulse_count == pJS.particles.array.length) {
          pJS.tmp.repulse_finish = true;
        }
      }

      if (pJS.tmp.repulse_clicking) {
        var process = function process() {
          var f = Math.atan2(dy, dx);
          p.vx = force * Math.cos(f);
          p.vy = force * Math.sin(f);

          if (pJS.particles.move.out_mode == 'bounce') {
            var pos = {
              x: p.x + p.vx,
              y: p.y + p.vy
            };
            if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;else if (pos.x - p.radius < 0) p.vx = -p.vx;
            if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;else if (pos.y - p.radius < 0) p.vy = -p.vy;
          }
        }; // default


        var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance / 6, 3);
        var dx = pJS.interactivity.mouse.click_pos_x - p.x,
            dy = pJS.interactivity.mouse.click_pos_y - p.y,
            d = dx * dx + dy * dy;
        var force = -repulseRadius / d * 1;

        if (d <= repulseRadius) {
          process();
        } // bang - slow motion mode
        // if(!pJS.tmp.repulse_finish){
        //   if(d <= repulseRadius){
        //     process();
        //   }
        // }else{
        //   process();
        // }

      } else {
        if (pJS.tmp.repulse_clicking == false) {
          p.vx = p.vx_i;
          p.vy = p.vy_i;
        }
      }
    }
  };

  pJS.fn.modes.grabParticle = function (p) {
    if (pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove') {
      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
      /* draw a line between the cursor and the particle if the distance between them is under the config distance */

      if (dist_mouse <= pJS.interactivity.modes.grab.distance) {
        var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - dist_mouse / (1 / pJS.interactivity.modes.grab.line_linked.opacity) / pJS.interactivity.modes.grab.distance;

        if (opacity_line > 0) {
          /* style */
          var color_line = pJS.particles.line_linked.color_rgb_line;
          pJS.canvas.ctx.strokeStyle = 'rgba(' + color_line.r + ',' + color_line.g + ',' + color_line.b + ',' + opacity_line + ')';
          pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width; //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */

          /* path */

          pJS.canvas.ctx.beginPath();
          pJS.canvas.ctx.moveTo(p.x, p.y);
          pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
          pJS.canvas.ctx.stroke();
          pJS.canvas.ctx.closePath();
        }
      }
    }
  };
  /* ---------- pJS functions - vendors ------------ */


  pJS.fn.vendors.eventsListeners = function () {
    /* events target element */
    if (pJS.interactivity.detect_on == 'window') {
      pJS.interactivity.el = window;
    } else {
      pJS.interactivity.el = pJS.canvas.el;
    }
    /* detect mouse pos - on hover / click event */


    if (pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable) {
      /* el on mousemove */
      pJS.interactivity.el.addEventListener('mousemove', function (e) {
        if (pJS.interactivity.el == window) {
          var pos_x = e.clientX,
              pos_y = e.clientY;
        } else {
          var pos_x = e.offsetX || e.clientX,
              pos_y = e.offsetY || e.clientY;
        }

        pJS.interactivity.mouse.pos_x = pos_x;
        pJS.interactivity.mouse.pos_y = pos_y;

        if (pJS.tmp.retina) {
          pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
          pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
        }

        pJS.interactivity.status = 'mousemove';
      });
      /* el on onmouseleave */

      pJS.interactivity.el.addEventListener('mouseleave', function (e) {
        pJS.interactivity.mouse.pos_x = null;
        pJS.interactivity.mouse.pos_y = null;
        pJS.interactivity.status = 'mouseleave';
      });
    }
    /* on click event */


    if (pJS.interactivity.events.onclick.enable) {
      pJS.interactivity.el.addEventListener('click', function () {
        pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
        pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
        pJS.interactivity.mouse.click_time = new Date().getTime();

        if (pJS.interactivity.events.onclick.enable) {
          switch (pJS.interactivity.events.onclick.mode) {
            case 'push':
              if (pJS.particles.move.enable) {
                pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
              } else {
                if (pJS.interactivity.modes.push.particles_nb == 1) {
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                } else if (pJS.interactivity.modes.push.particles_nb > 1) {
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
                }
              }

              break;

            case 'remove':
              pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
              break;

            case 'bubble':
              pJS.tmp.bubble_clicking = true;
              break;

            case 'repulse':
              pJS.tmp.repulse_clicking = true;
              pJS.tmp.repulse_count = 0;
              pJS.tmp.repulse_finish = false;
              setTimeout(function () {
                pJS.tmp.repulse_clicking = false;
              }, pJS.interactivity.modes.repulse.duration * 1000);
              break;
          }
        }
      });
    }
  };

  pJS.fn.vendors.densityAutoParticles = function () {
    if (pJS.particles.number.density.enable) {
      /* calc area */
      var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;

      if (pJS.tmp.retina) {
        area = area / (pJS.canvas.pxratio * 2);
      }
      /* calc number of particles based on density area */


      var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;
      /* add or remove X particles */

      var missing_particles = pJS.particles.array.length - nb_particles;
      if (missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));else pJS.fn.modes.removeParticles(missing_particles);
    }
  };

  pJS.fn.vendors.checkOverlap = function (p1, position) {
    for (var i = 0; i < pJS.particles.array.length; i++) {
      var p2 = pJS.particles.array[i];
      var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx * dx + dy * dy);

      if (dist <= p1.radius + p2.radius) {
        p1.x = position ? position.x : Math.random() * pJS.canvas.w;
        p1.y = position ? position.y : Math.random() * pJS.canvas.h;
        pJS.fn.vendors.checkOverlap(p1);
      }
    }
  };

  pJS.fn.vendors.createSvgImg = function (p) {
    /* set color to svg element */
    var svgXml = pJS.tmp.source_svg,
        rgbHex = /#([0-9A-F]{3,6})/gi,
        coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
      if (p.color.rgb) {
        var color_value = 'rgba(' + p.color.rgb.r + ',' + p.color.rgb.g + ',' + p.color.rgb.b + ',' + p.opacity + ')';
      } else {
        var color_value = 'hsla(' + p.color.hsl.h + ',' + p.color.hsl.s + '%,' + p.color.hsl.l + '%,' + p.opacity + ')';
      }

      return color_value;
    });
    /* prepare to create img with colored svg */

    var svg = new Blob([coloredSvgXml], {
      type: 'image/svg+xml;charset=utf-8'
    }),
        DOMURL = window.URL || window.webkitURL || window,
        url = DOMURL.createObjectURL(svg);
    /* create particle img obj */

    var img = new Image();
    img.addEventListener('load', function () {
      p.img.obj = img;
      p.img.loaded = true;
      DOMURL.revokeObjectURL(url);
      pJS.tmp.count_svg++;
    });
    img.src = url;
  };

  pJS.fn.vendors.destroypJS = function () {
    cancelAnimationFrame(pJS.fn.drawAnimFrame);
    canvas_el.remove();
    pJSDom = null;
  };

  pJS.fn.vendors.drawShape = function (c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator) {
    // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
    var sideCount = sideCountNumerator * sideCountDenominator;
    var decimalSides = sideCountNumerator / sideCountDenominator;
    var interiorAngleDegrees = 180 * (decimalSides - 2) / decimalSides;
    var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians

    c.save();
    c.beginPath();
    c.translate(startX, startY);
    c.moveTo(0, 0);

    for (var i = 0; i < sideCount; i++) {
      c.lineTo(sideLength, 0);
      c.translate(sideLength, 0);
      c.rotate(interiorAngle);
    } //c.stroke();


    c.fill();
    c.restore();
  };

  pJS.fn.vendors.exportImg = function () {
    window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
  };

  pJS.fn.vendors.loadImg = function (type) {
    pJS.tmp.img_error = undefined;

    if (pJS.particles.shape.image.src != '') {
      if (type == 'svg') {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', pJS.particles.shape.image.src);

        xhr.onreadystatechange = function (data) {
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
              pJS.tmp.source_svg = data.currentTarget.response;
              pJS.fn.vendors.checkBeforeDraw();
            } else {
              console.log('Error pJS - Image not found');
              pJS.tmp.img_error = true;
            }
          }
        };

        xhr.send();
      } else {
        var img = new Image();
        img.addEventListener('load', function () {
          pJS.tmp.img_obj = img;
          pJS.fn.vendors.checkBeforeDraw();
        });
        img.src = pJS.particles.shape.image.src;
      }
    } else {
      console.log('Error pJS - No image.src');
      pJS.tmp.img_error = true;
    }
  };

  pJS.fn.vendors.draw = function () {
    if (pJS.particles.shape.type == 'image') {
      if (pJS.tmp.img_type == 'svg') {
        if (pJS.tmp.count_svg >= pJS.particles.number.value) {
          pJS.fn.particlesDraw();
          if (!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        } else {
          //console.log('still loading...');
          if (!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }
      } else {
        if (pJS.tmp.img_obj != undefined) {
          pJS.fn.particlesDraw();
          if (!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        } else {
          if (!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }
      }
    } else {
      pJS.fn.particlesDraw();
      if (!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
    }
  };

  pJS.fn.vendors.checkBeforeDraw = function () {
    // if shape is image
    if (pJS.particles.shape.type == 'image') {
      if (pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined) {
        pJS.tmp.checkAnimFrame = requestAnimFrame(check);
      } else {
        //console.log('images loaded! cancel check');
        cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);

        if (!pJS.tmp.img_error) {
          pJS.fn.vendors.init();
          pJS.fn.vendors.draw();
        }
      }
    } else {
      pJS.fn.vendors.init();
      pJS.fn.vendors.draw();
    }
  };

  pJS.fn.vendors.init = function () {
    /* init canvas + particles */
    pJS.fn.retinaInit();
    pJS.fn.canvasInit();
    pJS.fn.canvasSize();
    pJS.fn.canvasPaint();
    pJS.fn.particlesCreate();
    pJS.fn.vendors.densityAutoParticles();
    /* particles.line_linked - convert hex colors to rgb */

    pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);
  };

  pJS.fn.vendors.start = function () {
    if (isInArray('image', pJS.particles.shape.type)) {
      pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
      pJS.fn.vendors.loadImg(pJS.tmp.img_type);
    } else {
      pJS.fn.vendors.checkBeforeDraw();
    }
  };
  /* ---------- pJS - start ------------ */


  pJS.fn.vendors.eventsListeners();
  pJS.fn.vendors.start();
};
/* ---------- global functions - vendors ------------ */


Object.deepExtend = function (destination, source) {
  for (var property in source) {
    if (source[property] && source[property].constructor && source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      arguments.callee(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }

  return destination;
};

window.requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
}();

window.cancelRequestAnimFrame = function () {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}();

function hexToRgb(hex) {
  // By Tim Down - http://stackoverflow.com/a/5624139/3493650
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

;

function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
}

;

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}
/* ---------- particles.js functions - start ------------ */


window.pJSDom = [];

window.particlesJS = function (tag_id, params) {
  //console.log(params);

  /* no string id? so it's object params, and set the id with default id */
  if (typeof tag_id != 'string') {
    params = tag_id;
    tag_id = 'particles-js';
  }
  /* no id? set the id to default id */


  if (!tag_id) {
    tag_id = 'particles-js';
  }
  /* pJS elements */


  var pJS_tag = document.getElementById(tag_id),
      pJS_canvas_class = 'particles-js-canvas-el',
      exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);
  /* remove canvas if exists into the pJS target tag */

  if (exist_canvas.length) {
    while (exist_canvas.length > 0) {
      pJS_tag.removeChild(exist_canvas[0]);
    }
  }
  /* create canvas element */


  var canvas_el = document.createElement('canvas');
  canvas_el.className = pJS_canvas_class;
  /* set size canvas */

  canvas_el.style.width = "100%";
  canvas_el.style.height = "100%";
  /* append canvas */

  var canvas = document.getElementById(tag_id).appendChild(canvas_el);
  /* launch particle.js */

  if (canvas != null) {
    pJSDom.push(new pJS(tag_id, params));
  }
};

window.particlesJS.load = function (tag_id, path_config_json, callback) {
  /* load json config */
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path_config_json);

  xhr.onreadystatechange = function (data) {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var params = JSON.parse(data.currentTarget.response);
        window.particlesJS(tag_id, params);
        if (callback) callback();
      } else {
        console.log('Error pJS - XMLHttpRequest status: ' + xhr.status);
        console.log('Error pJS - File config not found');
      }
    }
  };

  xhr.send();
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_libs_Particles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/libs/Particles */ "./components/libs/Particles.js");
/* harmony import */ var _components_libs_Particles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_libs_Particles__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\Andrew Yang\\Projects\\Tutorials\\SpaceX Launch Stats\\client\\pages\\index.js",
    _s = $RefreshSig$();



 // import Particles from 'react-particles-js';

function Home() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "d-flex flex-column",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container d-flex align-items-center justify-content-center align-self-center",
        style: {
          position: "absolute",
          top: 0,
          height: "90vh"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex flex-column align-items-center justify-content-around",
          style: {
            height: "40vh"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/assets/images/SpaceXLogoFull.png",
            alt: "SpaceX Logo",
            className: "img-fluid d-block",
            onClick: function onClick() {
              window.open("https://www.spacex.com/", "_ blank");
            },
            style: {
              width: 700,
              cursor: "pointer"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex w-50 justify-content-around flex-wrap",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              "class": "btn btn-primary mb-4",
              onClick: function onClick() {
                return router.push("launch_generator");
              },
              children: "Launch Generator"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              "class": "btn btn-primary mb-4",
              children: "Launch Search"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        className: "text-center",
        style: {
          position: 'absolute',
          bottom: 40,
          width: '100%'
        },
        children: ["Developed by ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.github.com/andytubeee",
          children: "Andrew Yang"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 24
        }, this), " \xA9 ", new Date().getFullYear()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(Home, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWJzL1BhcnRpY2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsicEpTIiwidGFnX2lkIiwicGFyYW1zIiwiY2FudmFzX2VsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2FudmFzIiwiZWwiLCJ3Iiwib2Zmc2V0V2lkdGgiLCJoIiwib2Zmc2V0SGVpZ2h0IiwicGFydGljbGVzIiwibnVtYmVyIiwidmFsdWUiLCJkZW5zaXR5IiwiZW5hYmxlIiwidmFsdWVfYXJlYSIsImNvbG9yIiwic2hhcGUiLCJ0eXBlIiwic3Ryb2tlIiwid2lkdGgiLCJwb2x5Z29uIiwibmJfc2lkZXMiLCJpbWFnZSIsInNyYyIsImhlaWdodCIsIm9wYWNpdHkiLCJyYW5kb20iLCJhbmltIiwic3BlZWQiLCJvcGFjaXR5X21pbiIsInN5bmMiLCJzaXplIiwic2l6ZV9taW4iLCJsaW5lX2xpbmtlZCIsImRpc3RhbmNlIiwibW92ZSIsImRpcmVjdGlvbiIsInN0cmFpZ2h0Iiwib3V0X21vZGUiLCJib3VuY2UiLCJhdHRyYWN0Iiwicm90YXRlWCIsInJvdGF0ZVkiLCJhcnJheSIsImludGVyYWN0aXZpdHkiLCJkZXRlY3Rfb24iLCJldmVudHMiLCJvbmhvdmVyIiwibW9kZSIsIm9uY2xpY2siLCJyZXNpemUiLCJtb2RlcyIsImdyYWIiLCJidWJibGUiLCJkdXJhdGlvbiIsInJlcHVsc2UiLCJwdXNoIiwicGFydGljbGVzX25iIiwicmVtb3ZlIiwibW91c2UiLCJyZXRpbmFfZGV0ZWN0IiwiZm4iLCJpbnRlcmFjdCIsInZlbmRvcnMiLCJ0bXAiLCJPYmplY3QiLCJkZWVwRXh0ZW5kIiwib2JqIiwic2l6ZV92YWx1ZSIsInNpemVfYW5pbV9zcGVlZCIsIm1vdmVfc3BlZWQiLCJsaW5lX2xpbmtlZF9kaXN0YW5jZSIsImxpbmVfbGlua2VkX3dpZHRoIiwibW9kZV9ncmFiX2Rpc3RhbmNlIiwibW9kZV9idWJibGVfZGlzdGFuY2UiLCJtb2RlX2J1YmJsZV9zaXplIiwibW9kZV9yZXB1bHNlX2Rpc3RhbmNlIiwicmV0aW5hSW5pdCIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJweHJhdGlvIiwicmV0aW5hIiwiY2FudmFzSW5pdCIsImN0eCIsImdldENvbnRleHQiLCJjYW52YXNTaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhcnRpY2xlc0VtcHR5IiwicGFydGljbGVzQ3JlYXRlIiwicGFydGljbGVzRHJhdyIsImRlbnNpdHlBdXRvUGFydGljbGVzIiwiY2FudmFzUGFpbnQiLCJmaWxsUmVjdCIsImNhbnZhc0NsZWFyIiwiY2xlYXJSZWN0IiwicGFydGljbGUiLCJwb3NpdGlvbiIsInJhZGl1cyIsIk1hdGgiLCJzaXplX3N0YXR1cyIsInZzIiwieCIsInkiLCJjaGVja092ZXJsYXAiLCJBcnJheSIsImNvbG9yX3NlbGVjdGVkIiwiZmxvb3IiLCJsZW5ndGgiLCJyZ2IiLCJoZXhUb1JnYiIsInIiLCJ1bmRlZmluZWQiLCJnIiwiYiIsInMiLCJsIiwiaHNsIiwib3BhY2l0eV9zdGF0dXMiLCJ2byIsInZlbGJhc2UiLCJ2eCIsInZ5IiwidnhfaSIsInZ5X2kiLCJzaGFwZV90eXBlIiwic2hhcGVfc2VsZWN0ZWQiLCJzaCIsImltZyIsInJhdGlvIiwiaW1nX3R5cGUiLCJzb3VyY2Vfc3ZnIiwiY3JlYXRlU3ZnSW1nIiwicHVzaGluZyIsImxvYWRlZCIsInByb3RvdHlwZSIsImRyYXciLCJwIiwicmFkaXVzX2J1YmJsZSIsIm9wYWNpdHlfYnViYmxlIiwiY29sb3JfdmFsdWUiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsInJlY3QiLCJkcmF3U2hhcGUiLCJkcmF3SW1hZ2UiLCJpbWdfb2JqIiwiY2xvc2VQYXRoIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJmaWxsIiwiaSIsInBhcnRpY2xlc1VwZGF0ZSIsIm1zIiwibmV3X3BvcyIsInhfbGVmdCIsInhfcmlnaHQiLCJ5X3RvcCIsInlfYm90dG9tIiwiaXNJbkFycmF5IiwiZ3JhYlBhcnRpY2xlIiwiYnViYmxlUGFydGljbGUiLCJyZXB1bHNlUGFydGljbGUiLCJqIiwicDIiLCJsaW5rUGFydGljbGVzIiwiYXR0cmFjdFBhcnRpY2xlcyIsImJvdW5jZVBhcnRpY2xlcyIsInBhcnRpY2xlc1JlZnJlc2giLCJjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lIiwiY2hlY2tBbmltRnJhbWUiLCJkcmF3QW5pbUZyYW1lIiwiY291bnRfc3ZnIiwic3RhcnQiLCJwMSIsImR4IiwiZHkiLCJkaXN0Iiwic3FydCIsIm9wYWNpdHlfbGluZSIsImNvbG9yX2xpbmUiLCJjb2xvcl9yZ2JfbGluZSIsIm1vdmVUbyIsImxpbmVUbyIsImF4IiwiYXkiLCJkaXN0X3AiLCJwdXNoUGFydGljbGVzIiwibmIiLCJwb3MiLCJwb3NfeCIsInBvc195IiwicmVtb3ZlUGFydGljbGVzIiwic3BsaWNlIiwiaW5pdCIsImR4X21vdXNlIiwiZHlfbW91c2UiLCJkaXN0X21vdXNlIiwic3RhdHVzIiwiZGlmIiwicHJvY2VzcyIsImJ1YmJsZV9wYXJhbSIsInBhcnRpY2xlc19wYXJhbSIsInBfb2JqX2J1YmJsZSIsInBfb2JqIiwiaWQiLCJidWJibGVfZHVyYXRpb25fZW5kIiwidGltZV9zcGVudCIsInZhbHVlX3RtcCIsImJ1YmJsZV9jbGlja2luZyIsImNsaWNrX3Bvc194IiwiY2xpY2tfcG9zX3kiLCJEYXRlIiwiZ2V0VGltZSIsImNsaWNrX3RpbWUiLCJub3JtVmVjIiwicmVwdWxzZVJhZGl1cyIsInZlbG9jaXR5IiwicmVwdWxzZUZhY3RvciIsImNsYW1wIiwicG93IiwicmVwdWxzZV9maW5pc2giLCJyZXB1bHNlX2NvdW50IiwicmVwdWxzZV9jbGlja2luZyIsImYiLCJhdGFuMiIsImZvcmNlIiwiY29zIiwic2luIiwiZCIsImV2ZW50c0xpc3RlbmVycyIsImUiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9mZnNldFgiLCJvZmZzZXRZIiwic2V0VGltZW91dCIsImFyZWEiLCJuYl9wYXJ0aWNsZXMiLCJtaXNzaW5nX3BhcnRpY2xlcyIsImFicyIsInN2Z1htbCIsInJnYkhleCIsImNvbG9yZWRTdmdYbWwiLCJyZXBsYWNlIiwibSIsInN2ZyIsIkJsb2IiLCJET01VUkwiLCJVUkwiLCJ3ZWJraXRVUkwiLCJ1cmwiLCJjcmVhdGVPYmplY3RVUkwiLCJJbWFnZSIsInJldm9rZU9iamVjdFVSTCIsImRlc3Ryb3lwSlMiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInBKU0RvbSIsImMiLCJzdGFydFgiLCJzdGFydFkiLCJzaWRlTGVuZ3RoIiwic2lkZUNvdW50TnVtZXJhdG9yIiwic2lkZUNvdW50RGVub21pbmF0b3IiLCJzaWRlQ291bnQiLCJkZWNpbWFsU2lkZXMiLCJpbnRlcmlvckFuZ2xlRGVncmVlcyIsImludGVyaW9yQW5nbGUiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwicmVzdG9yZSIsImV4cG9ydEltZyIsIm9wZW4iLCJ0b0RhdGFVUkwiLCJsb2FkSW1nIiwiaW1nX2Vycm9yIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJkYXRhIiwicmVhZHlTdGF0ZSIsImN1cnJlbnRUYXJnZXQiLCJyZXNwb25zZSIsImNoZWNrQmVmb3JlRHJhdyIsImNvbnNvbGUiLCJsb2ciLCJzZW5kIiwicmVxdWVzdEFuaW1GcmFtZSIsImNoZWNrIiwic3Vic3RyIiwiZGVzdGluYXRpb24iLCJzb3VyY2UiLCJwcm9wZXJ0eSIsImNvbnN0cnVjdG9yIiwiYXJndW1lbnRzIiwiY2FsbGVlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJ3ZWJraXRDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclRpbWVvdXQiLCJoZXgiLCJzaG9ydGhhbmRSZWdleCIsInJlc3VsdCIsImV4ZWMiLCJwYXJzZUludCIsIm1pbiIsIm1heCIsImluZGV4T2YiLCJwYXJ0aWNsZXNKUyIsInBKU190YWciLCJnZXRFbGVtZW50QnlJZCIsInBKU19jYW52YXNfY2xhc3MiLCJleGlzdF9jYW52YXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicmVtb3ZlQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJhcHBlbmRDaGlsZCIsImxvYWQiLCJwYXRoX2NvbmZpZ19qc29uIiwiSlNPTiIsInBhcnNlIiwiSG9tZSIsInJvdXRlciIsInVzZVJvdXRlciIsInRvcCIsImN1cnNvciIsImJvdHRvbSIsImdldEZ1bGxZZWFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsR0FBRyxHQUFHLGFBQVVDLE1BQVYsRUFBa0JDLE1BQWxCLEVBQTBCO0FBRWhDLE1BQUlDLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQU1KLE1BQU4sR0FBZSw0QkFBdEMsQ0FBaEI7QUFFQTs7QUFDQSxPQUFLRCxHQUFMLEdBQVc7QUFDUE0sVUFBTSxFQUFFO0FBQ0pDLFFBQUUsRUFBRUosU0FEQTtBQUVKSyxPQUFDLEVBQUVMLFNBQVMsQ0FBQ00sV0FGVDtBQUdKQyxPQUFDLEVBQUVQLFNBQVMsQ0FBQ1E7QUFIVCxLQUREO0FBTVBDLGFBQVMsRUFBRTtBQUNQQyxZQUFNLEVBQUU7QUFDSkMsYUFBSyxFQUFFLEdBREg7QUFFSkMsZUFBTyxFQUFFO0FBQ0xDLGdCQUFNLEVBQUUsSUFESDtBQUVMQyxvQkFBVSxFQUFFO0FBRlA7QUFGTCxPQUREO0FBUVBDLFdBQUss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QUFBUSxpQkFBUyxFQUFDLGFBQWxCO0FBQWdDLGFBQUssRUFBRTtBQUFFd0Msa0JBQVEsRUFBRSxVQUFaO0FBQXdCaVAsZ0JBQU0sRUFBRSxFQUFoQztBQUFvQzlULGVBQUssRUFBRTtBQUEzQyxTQUF2QztBQUFBLGlEQUNlO0FBQUcsY0FBSSxFQUFDLG1DQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURmLFlBQ21GLElBQUlrTSxJQUFKLEdBQVc2SCxXQUFYLEVBRG5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQTRDRDs7R0EvQ3VCTixJO1VBQ1BFLHFEOzs7S0FET0YsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jN2VhY2MyZjc3YzlhYTI0MjVhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLyogQXV0aG9yIDogVmluY2VudCBHYXJyZWF1ICAtIHZpbmNlbnRnYXJyZWF1LmNvbVxyXG4vKiBNSVQgbGljZW5zZTogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vKiBEZW1vIC8gR2VuZXJhdG9yIDogdmluY2VudGdhcnJlYXUuY29tL3BhcnRpY2xlcy5qc1xyXG4vKiBHaXRIdWIgOiBnaXRodWIuY29tL1ZpbmNlbnRHYXJyZWF1L3BhcnRpY2xlcy5qc1xyXG4vKiBIb3cgdG8gdXNlPyA6IENoZWNrIHRoZSBHaXRIdWIgUkVBRE1FXHJcbi8qIHYyLjAuMFxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxudmFyIHBKUyA9IGZ1bmN0aW9uICh0YWdfaWQsIHBhcmFtcykge1xyXG5cclxuICAgIHZhciBjYW52YXNfZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRhZ19pZCArICcgPiAucGFydGljbGVzLWpzLWNhbnZhcy1lbCcpO1xyXG5cclxuICAgIC8qIHBhcnRpY2xlcy5qcyB2YXJpYWJsZXMgd2l0aCBkZWZhdWx0IHZhbHVlcyAqL1xyXG4gICAgdGhpcy5wSlMgPSB7XHJcbiAgICAgICAgY2FudmFzOiB7XHJcbiAgICAgICAgICAgIGVsOiBjYW52YXNfZWwsXHJcbiAgICAgICAgICAgIHc6IGNhbnZhc19lbC5vZmZzZXRXaWR0aCxcclxuICAgICAgICAgICAgaDogY2FudmFzX2VsLm9mZnNldEhlaWdodFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFydGljbGVzOiB7XHJcbiAgICAgICAgICAgIG51bWJlcjoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IDQwMCxcclxuICAgICAgICAgICAgICAgIGRlbnNpdHk6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVfYXJlYTogODAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJyNmZmYnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNoYXBlOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2lyY2xlJyxcclxuICAgICAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmMDAwMCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwb2x5Z29uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmJfc2lkZXM6IDVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcGFjaXR5OiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogMSxcclxuICAgICAgICAgICAgICAgIHJhbmRvbTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhbmltOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzcGVlZDogMixcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5X21pbjogMCxcclxuICAgICAgICAgICAgICAgICAgICBzeW5jOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaXplOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogMjAsXHJcbiAgICAgICAgICAgICAgICByYW5kb206IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYW5pbToge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemVfbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHN5bmM6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxpbmVfbGlua2VkOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkaXN0YW5jZTogMTAwLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtb3ZlOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogMixcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgcmFuZG9tOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHN0cmFpZ2h0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG91dF9tb2RlOiAnb3V0JyxcclxuICAgICAgICAgICAgICAgIGJvdW5jZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhdHRyYWN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICByb3RhdGVYOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZVk6IDMwMDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXJyYXk6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnRlcmFjdGl2aXR5OiB7XHJcbiAgICAgICAgICAgIGRldGVjdF9vbjogJ2NhbnZhcycsXHJcbiAgICAgICAgICAgIGV2ZW50czoge1xyXG4gICAgICAgICAgICAgICAgb25ob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlOiAnZ3JhYidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvbmNsaWNrOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6ICdwdXNoJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlc2l6ZTogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtb2Rlczoge1xyXG4gICAgICAgICAgICAgICAgZ3JhYjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZV9saW5rZWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBidWJibGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZTogMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZXB1bHNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC40XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcHVzaDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlc19uYjogNFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlc19uYjogMlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtb3VzZToge31cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJldGluYV9kZXRlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGZuOiB7XHJcbiAgICAgICAgICAgIGludGVyYWN0OiB7fSxcclxuICAgICAgICAgICAgbW9kZXM6IHt9LFxyXG4gICAgICAgICAgICB2ZW5kb3JzOiB7fVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG1wOiB7fVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgcEpTID0gdGhpcy5wSlM7XHJcblxyXG4gICAgLyogcGFyYW1zIHNldHRpbmdzICovXHJcbiAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgT2JqZWN0LmRlZXBFeHRlbmQocEpTLCBwYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHBKUy50bXAub2JqID0ge1xyXG4gICAgICAgIHNpemVfdmFsdWU6IHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSxcclxuICAgICAgICBzaXplX2FuaW1fc3BlZWQ6IHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNwZWVkLFxyXG4gICAgICAgIG1vdmVfc3BlZWQ6IHBKUy5wYXJ0aWNsZXMubW92ZS5zcGVlZCxcclxuICAgICAgICBsaW5lX2xpbmtlZF9kaXN0YW5jZTogcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSxcclxuICAgICAgICBsaW5lX2xpbmtlZF93aWR0aDogcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aCxcclxuICAgICAgICBtb2RlX2dyYWJfZGlzdGFuY2U6IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2UsXHJcbiAgICAgICAgbW9kZV9idWJibGVfZGlzdGFuY2U6IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSxcclxuICAgICAgICBtb2RlX2J1YmJsZV9zaXplOiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSxcclxuICAgICAgICBtb2RlX3JlcHVsc2VfZGlzdGFuY2U6IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2VcclxuICAgIH07XHJcblxyXG5cclxuICAgIHBKUy5mbi5yZXRpbmFJbml0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAocEpTLnJldGluYV9kZXRlY3QgJiYgd2luZG93LmRldmljZVBpeGVsUmF0aW8gPiAxKSB7XHJcbiAgICAgICAgICAgIHBKUy5jYW52YXMucHhyYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG4gICAgICAgICAgICBwSlMudG1wLnJldGluYSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwSlMuY2FudmFzLnB4cmF0aW8gPSAxO1xyXG4gICAgICAgICAgICBwSlMudG1wLnJldGluYSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcEpTLmNhbnZhcy53ID0gcEpTLmNhbnZhcy5lbC5vZmZzZXRXaWR0aCAqIHBKUy5jYW52YXMucHhyYXRpbztcclxuICAgICAgICBwSlMuY2FudmFzLmggPSBwSlMuY2FudmFzLmVsLm9mZnNldEhlaWdodCAqIHBKUy5jYW52YXMucHhyYXRpbztcclxuXHJcbiAgICAgICAgcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlID0gcEpTLnRtcC5vYmouc2l6ZV92YWx1ZSAqIHBKUy5jYW52YXMucHhyYXRpbztcclxuICAgICAgICBwSlMucGFydGljbGVzLnNpemUuYW5pbS5zcGVlZCA9IHBKUy50bXAub2JqLnNpemVfYW5pbV9zcGVlZCAqIHBKUy5jYW52YXMucHhyYXRpbztcclxuICAgICAgICBwSlMucGFydGljbGVzLm1vdmUuc3BlZWQgPSBwSlMudG1wLm9iai5tb3ZlX3NwZWVkICogcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgICAgIHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2UgPSBwSlMudG1wLm9iai5saW5lX2xpbmtlZF9kaXN0YW5jZSAqIHBKUy5jYW52YXMucHhyYXRpbztcclxuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlID0gcEpTLnRtcC5vYmoubW9kZV9ncmFiX2Rpc3RhbmNlICogcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSA9IHBKUy50bXAub2JqLm1vZGVfYnViYmxlX2Rpc3RhbmNlICogcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgICAgIHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGggPSBwSlMudG1wLm9iai5saW5lX2xpbmtlZF93aWR0aCAqIHBKUy5jYW52YXMucHhyYXRpbztcclxuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSA9IHBKUy50bXAub2JqLm1vZGVfYnViYmxlX3NpemUgKiBwSlMuY2FudmFzLnB4cmF0aW87XHJcbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZSA9IHBKUy50bXAub2JqLm1vZGVfcmVwdWxzZV9kaXN0YW5jZSAqIHBKUy5jYW52YXMucHhyYXRpbztcclxuXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgLyogLS0tLS0tLS0tLSBwSlMgZnVuY3Rpb25zIC0gY2FudmFzIC0tLS0tLS0tLS0tLSAqL1xyXG5cclxuICAgIHBKUy5mbi5jYW52YXNJbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHBKUy5jYW52YXMuY3R4ID0gcEpTLmNhbnZhcy5lbC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwSlMuZm4uY2FudmFzU2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgcEpTLmNhbnZhcy5lbC53aWR0aCA9IHBKUy5jYW52YXMudztcclxuICAgICAgICBwSlMuY2FudmFzLmVsLmhlaWdodCA9IHBKUy5jYW52YXMuaDtcclxuXHJcbiAgICAgICAgaWYgKHBKUyAmJiBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMucmVzaXplKSB7XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHBKUy5jYW52YXMudyA9IHBKUy5jYW52YXMuZWwub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgICAgICBwSlMuY2FudmFzLmggPSBwSlMuY2FudmFzLmVsLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICAvKiByZXNpemUgY2FudmFzICovXHJcbiAgICAgICAgICAgICAgICBpZiAocEpTLnRtcC5yZXRpbmEpIHtcclxuICAgICAgICAgICAgICAgICAgICBwSlMuY2FudmFzLncgKj0gcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuaCAqPSBwSlMuY2FudmFzLnB4cmF0aW87XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5lbC53aWR0aCA9IHBKUy5jYW52YXMudztcclxuICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuZWwuaGVpZ2h0ID0gcEpTLmNhbnZhcy5oO1xyXG5cclxuICAgICAgICAgICAgICAgIC8qIHJlcGFpbnQgY2FudmFzIG9uIGFuaW0gZGlzYWJsZWQgKi9cclxuICAgICAgICAgICAgICAgIGlmICghcEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNFbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNDcmVhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmRlbnNpdHlBdXRvUGFydGljbGVzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLyogZGVuc2l0eSBwYXJ0aWNsZXMgZW5hYmxlZCAqL1xyXG4gICAgICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuZGVuc2l0eUF1dG9QYXJ0aWNsZXMoKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcEpTLmZuLmNhbnZhc1BhaW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmZpbGxSZWN0KDAsIDAsIHBKUy5jYW52YXMudywgcEpTLmNhbnZhcy5oKTtcclxuICAgIH07XHJcblxyXG4gICAgcEpTLmZuLmNhbnZhc0NsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBwSlMuY2FudmFzLncsIHBKUy5jYW52YXMuaCk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvKiAtLS0tLS0tLS0gcEpTIGZ1bmN0aW9ucyAtIHBhcnRpY2xlcyAtLS0tLS0tLS0tLSAqL1xyXG5cclxuICAgIHBKUy5mbi5wYXJ0aWNsZSA9IGZ1bmN0aW9uIChjb2xvciwgb3BhY2l0eSwgcG9zaXRpb24pIHtcclxuXHJcbiAgICAgICAgLyogc2l6ZSAqL1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gKHBKUy5wYXJ0aWNsZXMuc2l6ZS5yYW5kb20gPyBNYXRoLnJhbmRvbSgpIDogMSkgKiBwSlMucGFydGljbGVzLnNpemUudmFsdWU7XHJcbiAgICAgICAgaWYgKHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLmVuYWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNpemVfc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudnMgPSBwSlMucGFydGljbGVzLnNpemUuYW5pbS5zcGVlZCAvIDEwMDtcclxuICAgICAgICAgICAgaWYgKCFwSlMucGFydGljbGVzLnNpemUuYW5pbS5zeW5jKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZzID0gdGhpcy52cyAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIHBvc2l0aW9uICovXHJcbiAgICAgICAgdGhpcy54ID0gcG9zaXRpb24gPyBwb3NpdGlvbi54IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMudztcclxuICAgICAgICB0aGlzLnkgPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnkgOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy5oO1xyXG5cclxuICAgICAgICAvKiBjaGVjayBwb3NpdGlvbiAgLSBpbnRvIHRoZSBjYW52YXMgKi9cclxuICAgICAgICBpZiAodGhpcy54ID4gcEpTLmNhbnZhcy53IC0gdGhpcy5yYWRpdXMgKiAyKSB0aGlzLnggPSB0aGlzLnggLSB0aGlzLnJhZGl1cztcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnggPCB0aGlzLnJhZGl1cyAqIDIpIHRoaXMueCA9IHRoaXMueCArIHRoaXMucmFkaXVzO1xyXG4gICAgICAgIGlmICh0aGlzLnkgPiBwSlMuY2FudmFzLmggLSB0aGlzLnJhZGl1cyAqIDIpIHRoaXMueSA9IHRoaXMueSAtIHRoaXMucmFkaXVzO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMueSA8IHRoaXMucmFkaXVzICogMikgdGhpcy55ID0gdGhpcy55ICsgdGhpcy5yYWRpdXM7XHJcblxyXG4gICAgICAgIC8qIGNoZWNrIHBvc2l0aW9uIC0gYXZvaWQgb3ZlcmxhcCAqL1xyXG4gICAgICAgIGlmIChwSlMucGFydGljbGVzLm1vdmUuYm91bmNlKSB7XHJcbiAgICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrT3ZlcmxhcCh0aGlzLCBwb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBjb2xvciAqL1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSB7fTtcclxuICAgICAgICBpZiAodHlwZW9mIChjb2xvci52YWx1ZSkgPT0gJ29iamVjdCcpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb2xvci52YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29sb3Jfc2VsZWN0ZWQgPSBjb2xvci52YWx1ZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwSlMucGFydGljbGVzLmNvbG9yLnZhbHVlLmxlbmd0aCldO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvci5yZ2IgPSBoZXhUb1JnYihjb2xvcl9zZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sb3IudmFsdWUuciAhPSB1bmRlZmluZWQgJiYgY29sb3IudmFsdWUuZyAhPSB1bmRlZmluZWQgJiYgY29sb3IudmFsdWUuYiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbG9yLnJnYiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcjogY29sb3IudmFsdWUucixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZzogY29sb3IudmFsdWUuZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYjogY29sb3IudmFsdWUuYlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjb2xvci52YWx1ZS5oICE9IHVuZGVmaW5lZCAmJiBjb2xvci52YWx1ZS5zICE9IHVuZGVmaW5lZCAmJiBjb2xvci52YWx1ZS5sICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3IuaHNsID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoOiBjb2xvci52YWx1ZS5oLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzOiBjb2xvci52YWx1ZS5zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsOiBjb2xvci52YWx1ZS5sXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb2xvci52YWx1ZSA9PSAncmFuZG9tJykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yLnJnYiA9IHtcclxuICAgICAgICAgICAgICAgIHI6IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjU1IC0gMCArIDEpKSArIDApLFxyXG4gICAgICAgICAgICAgICAgZzogKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyNTUgLSAwICsgMSkpICsgMCksXHJcbiAgICAgICAgICAgICAgICBiOiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI1NSAtIDAgKyAxKSkgKyAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiAoY29sb3IudmFsdWUpID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgdGhpcy5jb2xvci5yZ2IgPSBoZXhUb1JnYih0aGlzLmNvbG9yLnZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIG9wYWNpdHkgKi9cclxuICAgICAgICB0aGlzLm9wYWNpdHkgPSAocEpTLnBhcnRpY2xlcy5vcGFjaXR5LnJhbmRvbSA/IE1hdGgucmFuZG9tKCkgOiAxKSAqIHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZTtcclxuICAgICAgICBpZiAocEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uZW5hYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BhY2l0eV9zdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy52byA9IHBKUy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLnNwZWVkIC8gMTAwO1xyXG4gICAgICAgICAgICBpZiAoIXBKUy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLnN5bmMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudm8gPSB0aGlzLnZvICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogYW5pbWF0aW9uIC0gdmVsb2NpdHkgZm9yIHNwZWVkICovXHJcbiAgICAgICAgdmFyIHZlbGJhc2UgPSB7fVxyXG4gICAgICAgIHN3aXRjaCAocEpTLnBhcnRpY2xlcy5tb3ZlLmRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlICd0b3AnOlxyXG4gICAgICAgICAgICAgICAgdmVsYmFzZSA9IHsgeDogMCwgeTogLTEgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd0b3AtcmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgdmVsYmFzZSA9IHsgeDogMC41LCB5OiAtMC41IH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgdmVsYmFzZSA9IHsgeDogMSwgeTogLTAgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdib3R0b20tcmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgdmVsYmFzZSA9IHsgeDogMC41LCB5OiAwLjUgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdib3R0b20nOlxyXG4gICAgICAgICAgICAgICAgdmVsYmFzZSA9IHsgeDogMCwgeTogMSB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JvdHRvbS1sZWZ0JzpcclxuICAgICAgICAgICAgICAgIHZlbGJhc2UgPSB7IHg6IC0wLjUsIHk6IDEgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICAgICAgICAgIHZlbGJhc2UgPSB7IHg6IC0xLCB5OiAwIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAndG9wLWxlZnQnOlxyXG4gICAgICAgICAgICAgICAgdmVsYmFzZSA9IHsgeDogLTAuNSwgeTogLTAuNSB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB2ZWxiYXNlID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwSlMucGFydGljbGVzLm1vdmUuc3RyYWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy52eCA9IHZlbGJhc2UueDtcclxuICAgICAgICAgICAgdGhpcy52eSA9IHZlbGJhc2UueTtcclxuICAgICAgICAgICAgaWYgKHBKUy5wYXJ0aWNsZXMubW92ZS5yYW5kb20pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudnggPSB0aGlzLnZ4ICogKE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52eSA9IHRoaXMudnkgKiAoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnZ4ID0gdmVsYmFzZS54ICsgTWF0aC5yYW5kb20oKSAtIDAuNTtcclxuICAgICAgICAgICAgdGhpcy52eSA9IHZlbGJhc2UueSArIE1hdGgucmFuZG9tKCkgLSAwLjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB2YXIgdGhldGEgPSAyLjAgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAvLyB0aGlzLnZ4ID0gTWF0aC5jb3ModGhldGEpO1xyXG4gICAgICAgIC8vIHRoaXMudnkgPSBNYXRoLnNpbih0aGV0YSk7XHJcblxyXG4gICAgICAgIHRoaXMudnhfaSA9IHRoaXMudng7XHJcbiAgICAgICAgdGhpcy52eV9pID0gdGhpcy52eTtcclxuXHJcblxyXG5cclxuICAgICAgICAvKiBpZiBzaGFwZSBpcyBpbWFnZSAqL1xyXG5cclxuICAgICAgICB2YXIgc2hhcGVfdHlwZSA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUudHlwZTtcclxuICAgICAgICBpZiAodHlwZW9mIChzaGFwZV90eXBlKSA9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBpZiAoc2hhcGVfdHlwZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2hhcGVfc2VsZWN0ZWQgPSBzaGFwZV90eXBlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNoYXBlX3R5cGUubGVuZ3RoKV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXBlID0gc2hhcGVfc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNoYXBlID0gc2hhcGVfdHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNoYXBlID09ICdpbWFnZScpIHtcclxuICAgICAgICAgICAgdmFyIHNoID0gcEpTLnBhcnRpY2xlcy5zaGFwZTtcclxuICAgICAgICAgICAgdGhpcy5pbWcgPSB7XHJcbiAgICAgICAgICAgICAgICBzcmM6IHNoLmltYWdlLnNyYyxcclxuICAgICAgICAgICAgICAgIHJhdGlvOiBzaC5pbWFnZS53aWR0aCAvIHNoLmltYWdlLmhlaWdodFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pbWcucmF0aW8pIHRoaXMuaW1nLnJhdGlvID0gMTtcclxuICAgICAgICAgICAgaWYgKHBKUy50bXAuaW1nX3R5cGUgPT0gJ3N2ZycgJiYgcEpTLnRtcC5zb3VyY2Vfc3ZnICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuY3JlYXRlU3ZnSW1nKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBKUy50bXAucHVzaGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1nLmxvYWRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcEpTLmZuLnBhcnRpY2xlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB2YXIgcCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChwLnJhZGl1c19idWJibGUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHZhciByYWRpdXMgPSBwLnJhZGl1c19idWJibGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHJhZGl1cyA9IHAucmFkaXVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHAub3BhY2l0eV9idWJibGUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHZhciBvcGFjaXR5ID0gcC5vcGFjaXR5X2J1YmJsZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgb3BhY2l0eSA9IHAub3BhY2l0eTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwLmNvbG9yLnJnYikge1xyXG4gICAgICAgICAgICB2YXIgY29sb3JfdmFsdWUgPSAncmdiYSgnICsgcC5jb2xvci5yZ2IuciArICcsJyArIHAuY29sb3IucmdiLmcgKyAnLCcgKyBwLmNvbG9yLnJnYi5iICsgJywnICsgb3BhY2l0eSArICcpJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgY29sb3JfdmFsdWUgPSAnaHNsYSgnICsgcC5jb2xvci5oc2wuaCArICcsJyArIHAuY29sb3IuaHNsLnMgKyAnJSwnICsgcC5jb2xvci5oc2wubCArICclLCcgKyBvcGFjaXR5ICsgJyknO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcEpTLmNhbnZhcy5jdHguZmlsbFN0eWxlID0gY29sb3JfdmFsdWU7XHJcbiAgICAgICAgcEpTLmNhbnZhcy5jdHguYmVnaW5QYXRoKCk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAocC5zaGFwZSkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnY2lyY2xlJzpcclxuICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmFyYyhwLngsIHAueSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdlZGdlJzpcclxuICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LnJlY3QocC54IC0gcmFkaXVzLCBwLnkgLSByYWRpdXMsIHJhZGl1cyAqIDIsIHJhZGl1cyAqIDIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICd0cmlhbmdsZSc6XHJcbiAgICAgICAgICAgICAgICBwSlMuZm4udmVuZG9ycy5kcmF3U2hhcGUocEpTLmNhbnZhcy5jdHgsIHAueCAtIHJhZGl1cywgcC55ICsgcmFkaXVzIC8gMS42NiwgcmFkaXVzICogMiwgMywgMik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ3BvbHlnb24nOlxyXG4gICAgICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuZHJhd1NoYXBlKFxyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LFxyXG4gICAgICAgICAgICAgICAgICAgIHAueCAtIHJhZGl1cyAvIChwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMgLyAzLjUpLCAvLyBzdGFydFhcclxuICAgICAgICAgICAgICAgICAgICBwLnkgLSByYWRpdXMgLyAoMi42NiAvIDMuNSksIC8vIHN0YXJ0WVxyXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1cyAqIDIuNjYgLyAocEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzIC8gMyksIC8vIHNpZGVMZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICBwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMsIC8vIHNpZGVDb3VudE51bWVyYXRvclxyXG4gICAgICAgICAgICAgICAgICAgIDEgLy8gc2lkZUNvdW50RGVub21pbmF0b3JcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ3N0YXInOlxyXG4gICAgICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuZHJhd1NoYXBlKFxyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LFxyXG4gICAgICAgICAgICAgICAgICAgIHAueCAtIHJhZGl1cyAqIDIgLyAocEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzIC8gNCksIC8vIHN0YXJ0WFxyXG4gICAgICAgICAgICAgICAgICAgIHAueSAtIHJhZGl1cyAvICgyICogMi42NiAvIDMuNSksIC8vIHN0YXJ0WVxyXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1cyAqIDIgKiAyLjY2IC8gKHBKUy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcyAvIDMpLCAvLyBzaWRlTGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLCAvLyBzaWRlQ291bnROdW1lcmF0b3JcclxuICAgICAgICAgICAgICAgICAgICAyIC8vIHNpZGVDb3VudERlbm9taW5hdG9yXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdpbWFnZSc6XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgICAgICAgICAgICAgICAgICBwSlMuY2FudmFzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ19vYmosXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAueCAtIHJhZGl1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcC55IC0gcmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXMgKiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXMgKiAyIC8gcC5pbWcucmF0aW9cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwSlMudG1wLmltZ190eXBlID09ICdzdmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltZ19vYmogPSBwLmltZy5vYmo7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWdfb2JqID0gcEpTLnRtcC5pbWdfb2JqO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbWdfb2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmNsb3NlUGF0aCgpO1xyXG5cclxuICAgICAgICBpZiAocEpTLnBhcnRpY2xlcy5zaGFwZS5zdHJva2Uud2lkdGggPiAwKSB7XHJcbiAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZVN0eWxlID0gcEpTLnBhcnRpY2xlcy5zaGFwZS5zdHJva2UuY29sb3I7XHJcbiAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVXaWR0aCA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUuc3Ryb2tlLndpZHRoO1xyXG4gICAgICAgICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmZpbGwoKTtcclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4ucGFydGljbGVzQ3JlYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcEpTLnBhcnRpY2xlcy5udW1iZXIudmFsdWU7IGkrKykge1xyXG4gICAgICAgICAgICBwSlMucGFydGljbGVzLmFycmF5LnB1c2gobmV3IHBKUy5mbi5wYXJ0aWNsZShwSlMucGFydGljbGVzLmNvbG9yLCBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHBKUy5mbi5wYXJ0aWNsZXNVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgLyogdGhlIHBhcnRpY2xlICovXHJcbiAgICAgICAgICAgIHZhciBwID0gcEpTLnBhcnRpY2xlcy5hcnJheVtpXTtcclxuXHJcbiAgICAgICAgICAgIC8vIHZhciBkID0gKCBkeCA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc194IC0gcC54ICkgKiBkeCArICggZHkgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSAtIHAueSApICogZHk7XHJcbiAgICAgICAgICAgIC8vIHZhciBmID0gLUJBTkdfU0laRSAvIGQ7XHJcbiAgICAgICAgICAgIC8vIGlmICggZCA8IEJBTkdfU0laRSApIHtcclxuICAgICAgICAgICAgLy8gICAgIHZhciB0ID0gTWF0aC5hdGFuMiggZHksIGR4ICk7XHJcbiAgICAgICAgICAgIC8vICAgICBwLnZ4ID0gZiAqIE1hdGguY29zKHQpO1xyXG4gICAgICAgICAgICAvLyAgICAgcC52eSA9IGYgKiBNYXRoLnNpbih0KTtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgLyogbW92ZSB0aGUgcGFydGljbGUgKi9cclxuICAgICAgICAgICAgaWYgKHBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtcyA9IHBKUy5wYXJ0aWNsZXMubW92ZS5zcGVlZCAvIDI7XHJcbiAgICAgICAgICAgICAgICBwLnggKz0gcC52eCAqIG1zO1xyXG4gICAgICAgICAgICAgICAgcC55ICs9IHAudnkgKiBtcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyogY2hhbmdlIG9wYWNpdHkgc3RhdHVzICovXHJcbiAgICAgICAgICAgIGlmIChwSlMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5lbmFibGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwLm9wYWNpdHlfc3RhdHVzID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocC5vcGFjaXR5ID49IHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSkgcC5vcGFjaXR5X3N0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHAub3BhY2l0eSArPSBwLnZvO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocC5vcGFjaXR5IDw9IHBKUy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLm9wYWNpdHlfbWluKSBwLm9wYWNpdHlfc3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBwLm9wYWNpdHkgLT0gcC52bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwLm9wYWNpdHkgPCAwKSBwLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKiBjaGFuZ2Ugc2l6ZSAqL1xyXG4gICAgICAgICAgICBpZiAocEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uZW5hYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocC5zaXplX3N0YXR1cyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAucmFkaXVzID49IHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSkgcC5zaXplX3N0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHAucmFkaXVzICs9IHAudnM7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwLnJhZGl1cyA8PSBwSlMucGFydGljbGVzLnNpemUuYW5pbS5zaXplX21pbikgcC5zaXplX3N0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5yYWRpdXMgLT0gcC52cztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwLnJhZGl1cyA8IDApIHAucmFkaXVzID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyogY2hhbmdlIHBhcnRpY2xlIHBvc2l0aW9uIGlmIGl0IGlzIG91dCBvZiBjYW52YXMgKi9cclxuICAgICAgICAgICAgaWYgKHBKUy5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZSA9PSAnYm91bmNlJykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld19wb3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeF9sZWZ0OiBwLnJhZGl1cyxcclxuICAgICAgICAgICAgICAgICAgICB4X3JpZ2h0OiBwSlMuY2FudmFzLncsXHJcbiAgICAgICAgICAgICAgICAgICAgeV90b3A6IHAucmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHlfYm90dG9tOiBwSlMuY2FudmFzLmhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdfcG9zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHhfbGVmdDogLXAucmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHhfcmlnaHQ6IHBKUy5jYW52YXMudyArIHAucmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHlfdG9wOiAtcC5yYWRpdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgeV9ib3R0b206IHBKUy5jYW52YXMuaCArIHAucmFkaXVzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChwLnggLSBwLnJhZGl1cyA+IHBKUy5jYW52YXMudykge1xyXG4gICAgICAgICAgICAgICAgcC54ID0gbmV3X3Bvcy54X2xlZnQ7XHJcbiAgICAgICAgICAgICAgICBwLnkgPSBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy5oO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHAueCArIHAucmFkaXVzIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgcC54ID0gbmV3X3Bvcy54X3JpZ2h0O1xyXG4gICAgICAgICAgICAgICAgcC55ID0gTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocC55IC0gcC5yYWRpdXMgPiBwSlMuY2FudmFzLmgpIHtcclxuICAgICAgICAgICAgICAgIHAueSA9IG5ld19wb3MueV90b3A7XHJcbiAgICAgICAgICAgICAgICBwLnggPSBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy53O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHAueSArIHAucmFkaXVzIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgcC55ID0gbmV3X3Bvcy55X2JvdHRvbTtcclxuICAgICAgICAgICAgICAgIHAueCA9IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLnc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qIG91dCBvZiBjYW52YXMgbW9kZXMgKi9cclxuICAgICAgICAgICAgc3dpdGNoIChwSlMucGFydGljbGVzLm1vdmUub3V0X21vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2JvdW5jZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAueCArIHAucmFkaXVzID4gcEpTLmNhbnZhcy53KSBwLnZ4ID0gLXAudng7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocC54IC0gcC5yYWRpdXMgPCAwKSBwLnZ4ID0gLXAudng7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAueSArIHAucmFkaXVzID4gcEpTLmNhbnZhcy5oKSBwLnZ5ID0gLXAudnk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocC55IC0gcC5yYWRpdXMgPCAwKSBwLnZ5ID0gLXAudnk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qIGV2ZW50cyAqL1xyXG4gICAgICAgICAgICBpZiAoaXNJbkFycmF5KCdncmFiJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHBKUy5mbi5tb2Rlcy5ncmFiUGFydGljbGUocCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpc0luQXJyYXkoJ2J1YmJsZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpIHx8IGlzSW5BcnJheSgnYnViYmxlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHBKUy5mbi5tb2Rlcy5idWJibGVQYXJ0aWNsZShwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGlzSW5BcnJheSgncmVwdWxzZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpIHx8IGlzSW5BcnJheSgncmVwdWxzZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICBwSlMuZm4ubW9kZXMucmVwdWxzZVBhcnRpY2xlKHApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKiBpbnRlcmFjdGlvbiBhdXRvIGJldHdlZW4gcGFydGljbGVzICovXHJcbiAgICAgICAgICAgIGlmIChwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmVuYWJsZSB8fCBwSlMucGFydGljbGVzLm1vdmUuYXR0cmFjdC5lbmFibGUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSBpICsgMTsgaiA8IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcDIgPSBwSlMucGFydGljbGVzLmFycmF5W2pdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiBsaW5rIHBhcnRpY2xlcyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmVuYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwSlMuZm4uaW50ZXJhY3QubGlua1BhcnRpY2xlcyhwLCBwMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiBhdHRyYWN0IHBhcnRpY2xlcyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwSlMucGFydGljbGVzLm1vdmUuYXR0cmFjdC5lbmFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcEpTLmZuLmludGVyYWN0LmF0dHJhY3RQYXJ0aWNsZXMocCwgcDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyogYm91bmNlIHBhcnRpY2xlcyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwSlMucGFydGljbGVzLm1vdmUuYm91bmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBKUy5mbi5pbnRlcmFjdC5ib3VuY2VQYXJ0aWNsZXMocCwgcDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvKiBjbGVhciBjYW52YXMgKi9cclxuICAgICAgICBwSlMuY2FudmFzLmN0eC5jbGVhclJlY3QoMCwgMCwgcEpTLmNhbnZhcy53LCBwSlMuY2FudmFzLmgpO1xyXG5cclxuICAgICAgICAvKiB1cGRhdGUgZWFjaCBwYXJ0aWNsZXMgcGFyYW0gKi9cclxuICAgICAgICBwSlMuZm4ucGFydGljbGVzVXBkYXRlKCk7XHJcblxyXG4gICAgICAgIC8qIGRyYXcgZWFjaCBwYXJ0aWNsZSAqL1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgcCA9IHBKUy5wYXJ0aWNsZXMuYXJyYXlbaV07XHJcbiAgICAgICAgICAgIHAuZHJhdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHBKUy5mbi5wYXJ0aWNsZXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwSlMucGFydGljbGVzLmFycmF5ID0gW107XHJcbiAgICB9O1xyXG5cclxuICAgIHBKUy5mbi5wYXJ0aWNsZXNSZWZyZXNoID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvKiBpbml0IGFsbCAqL1xyXG4gICAgICAgIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmNoZWNrQW5pbUZyYW1lKTtcclxuICAgICAgICBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcclxuICAgICAgICBwSlMudG1wLnNvdXJjZV9zdmcgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgcEpTLnRtcC5pbWdfb2JqID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHBKUy50bXAuY291bnRfc3ZnID0gMDtcclxuICAgICAgICBwSlMuZm4ucGFydGljbGVzRW1wdHkoKTtcclxuICAgICAgICBwSlMuZm4uY2FudmFzQ2xlYXIoKTtcclxuXHJcbiAgICAgICAgLyogcmVzdGFydCAqL1xyXG4gICAgICAgIHBKUy5mbi52ZW5kb3JzLnN0YXJ0KCk7XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLyogLS0tLS0tLS0tLSBwSlMgZnVuY3Rpb25zIC0gcGFydGljbGVzIGludGVyYWN0aW9uIC0tLS0tLS0tLS0tLSAqL1xyXG5cclxuICAgIHBKUy5mbi5pbnRlcmFjdC5saW5rUGFydGljbGVzID0gZnVuY3Rpb24gKHAxLCBwMikge1xyXG5cclxuICAgICAgICB2YXIgZHggPSBwMS54IC0gcDIueCxcclxuICAgICAgICAgICAgZHkgPSBwMS55IC0gcDIueSxcclxuICAgICAgICAgICAgZGlzdCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcblxyXG4gICAgICAgIC8qIGRyYXcgYSBsaW5lIGJldHdlZW4gcDEgYW5kIHAyIGlmIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZW0gaXMgdW5kZXIgdGhlIGNvbmZpZyBkaXN0YW5jZSAqL1xyXG4gICAgICAgIGlmIChkaXN0IDw9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2UpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBvcGFjaXR5X2xpbmUgPSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLm9wYWNpdHkgLSAoZGlzdCAvICgxIC8gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5vcGFjaXR5KSkgLyBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKG9wYWNpdHlfbGluZSA+IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvKiBzdHlsZSAqL1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbG9yX2xpbmUgPSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yX3JnYl9saW5lO1xyXG4gICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgnICsgY29sb3JfbGluZS5yICsgJywnICsgY29sb3JfbGluZS5nICsgJywnICsgY29sb3JfbGluZS5iICsgJywnICsgb3BhY2l0eV9saW5lICsgJyknO1xyXG4gICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHgubGluZVdpZHRoID0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aDtcclxuICAgICAgICAgICAgICAgIC8vcEpTLmNhbnZhcy5jdHgubGluZUNhcCA9ICdyb3VuZCc7IC8qIHBlcmZvcm1hbmNlIGlzc3VlICovXHJcblxyXG4gICAgICAgICAgICAgICAgLyogcGF0aCAqL1xyXG4gICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICBwSlMuY2FudmFzLmN0eC5tb3ZlVG8ocDEueCwgcDEueSk7XHJcbiAgICAgICAgICAgICAgICBwSlMuY2FudmFzLmN0eC5saW5lVG8ocDIueCwgcDIueSk7XHJcbiAgICAgICAgICAgICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmNsb3NlUGF0aCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcEpTLmZuLmludGVyYWN0LmF0dHJhY3RQYXJ0aWNsZXMgPSBmdW5jdGlvbiAocDEsIHAyKSB7XHJcblxyXG4gICAgICAgIC8qIGNvbmRlbnNlZCBwYXJ0aWNsZXMgKi9cclxuICAgICAgICB2YXIgZHggPSBwMS54IC0gcDIueCxcclxuICAgICAgICAgICAgZHkgPSBwMS55IC0gcDIueSxcclxuICAgICAgICAgICAgZGlzdCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcblxyXG4gICAgICAgIGlmIChkaXN0IDw9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2UpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBheCA9IGR4IC8gKHBKUy5wYXJ0aWNsZXMubW92ZS5hdHRyYWN0LnJvdGF0ZVggKiAxMDAwKSxcclxuICAgICAgICAgICAgICAgIGF5ID0gZHkgLyAocEpTLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3Qucm90YXRlWSAqIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgcDEudnggLT0gYXg7XHJcbiAgICAgICAgICAgIHAxLnZ5IC09IGF5O1xyXG5cclxuICAgICAgICAgICAgcDIudnggKz0gYXg7XHJcbiAgICAgICAgICAgIHAyLnZ5ICs9IGF5O1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcEpTLmZuLmludGVyYWN0LmJvdW5jZVBhcnRpY2xlcyA9IGZ1bmN0aW9uIChwMSwgcDIpIHtcclxuXHJcbiAgICAgICAgdmFyIGR4ID0gcDEueCAtIHAyLngsXHJcbiAgICAgICAgICAgIGR5ID0gcDEueSAtIHAyLnksXHJcbiAgICAgICAgICAgIGRpc3QgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpLFxyXG4gICAgICAgICAgICBkaXN0X3AgPSBwMS5yYWRpdXMgKyBwMi5yYWRpdXM7XHJcblxyXG4gICAgICAgIGlmIChkaXN0IDw9IGRpc3RfcCkge1xyXG4gICAgICAgICAgICBwMS52eCA9IC1wMS52eDtcclxuICAgICAgICAgICAgcDEudnkgPSAtcDEudnk7XHJcblxyXG4gICAgICAgICAgICBwMi52eCA9IC1wMi52eDtcclxuICAgICAgICAgICAgcDIudnkgPSAtcDIudnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyogLS0tLS0tLS0tLSBwSlMgZnVuY3Rpb25zIC0gbW9kZXMgZXZlbnRzIC0tLS0tLS0tLS0tLSAqL1xyXG5cclxuICAgIHBKUy5mbi5tb2Rlcy5wdXNoUGFydGljbGVzID0gZnVuY3Rpb24gKG5iLCBwb3MpIHtcclxuXHJcbiAgICAgICAgcEpTLnRtcC5wdXNoaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBKUy5wYXJ0aWNsZXMuYXJyYXkucHVzaChcclxuICAgICAgICAgICAgICAgIG5ldyBwSlMuZm4ucGFydGljbGUoXHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLnBhcnRpY2xlcy5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAneCc6IHBvcyA/IHBvcy5wb3NfeCA6IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLncsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd5JzogcG9zID8gcG9zLnBvc195IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBpZiAoaSA9PSBuYiAtIDEpIHtcclxuICAgICAgICAgICAgICAgIGlmICghcEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwSlMudG1wLnB1c2hpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4ubW9kZXMucmVtb3ZlUGFydGljbGVzID0gZnVuY3Rpb24gKG5iKSB7XHJcblxyXG4gICAgICAgIHBKUy5wYXJ0aWNsZXMuYXJyYXkuc3BsaWNlKDAsIG5iKTtcclxuICAgICAgICBpZiAoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIHtcclxuICAgICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcEpTLmZuLm1vZGVzLmJ1YmJsZVBhcnRpY2xlID0gZnVuY3Rpb24gKHApIHtcclxuXHJcbiAgICAgICAgLyogb24gaG92ZXIgZXZlbnQgKi9cclxuICAgICAgICBpZiAocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlICYmIGlzSW5BcnJheSgnYnViYmxlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBkeF9tb3VzZSA9IHAueCAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LFxyXG4gICAgICAgICAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSxcclxuICAgICAgICAgICAgICAgIGRpc3RfbW91c2UgPSBNYXRoLnNxcnQoZHhfbW91c2UgKiBkeF9tb3VzZSArIGR5X21vdXNlICogZHlfbW91c2UpLFxyXG4gICAgICAgICAgICAgICAgcmF0aW8gPSAxIC0gZGlzdF9tb3VzZSAvIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgICAgICAgICBwLm9wYWNpdHlfYnViYmxlID0gcC5vcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgcC5yYWRpdXNfYnViYmxlID0gcC5yYWRpdXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qIG1vdXNlbW92ZSAtIGNoZWNrIHJhdGlvICovXHJcbiAgICAgICAgICAgIGlmIChkaXN0X21vdXNlIDw9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyYXRpbyA+PSAwICYmIHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9PSAnbW91c2Vtb3ZlJykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiBzaXplICovXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplICE9IHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplID4gcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2l6ZSA9IHAucmFkaXVzICsgKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplICogcmF0aW8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpemUgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAucmFkaXVzX2J1YmJsZSA9IHNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlmID0gcC5yYWRpdXMgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplID0gcC5yYWRpdXMgLSAoZGlmICogcmF0aW8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5yYWRpdXNfYnViYmxlID0gc2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5yYWRpdXNfYnViYmxlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qIG9wYWNpdHkgKi9cclxuICAgICAgICAgICAgICAgICAgICBpZiAocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkgIT0gcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkgPiBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcGFjaXR5ID0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkgKiByYXRpbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcGFjaXR5ID4gcC5vcGFjaXR5ICYmIG9wYWNpdHkgPD0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLm9wYWNpdHlfYnViYmxlID0gb3BhY2l0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcGFjaXR5ID0gcC5vcGFjaXR5IC0gKHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5KSAqIHJhdGlvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wYWNpdHkgPCBwLm9wYWNpdHkgJiYgb3BhY2l0eSA+PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAub3BhY2l0eV9idWJibGUgPSBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW5pdCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLyogbW91c2VsZWF2ZSAqL1xyXG4gICAgICAgICAgICBpZiAocEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID09ICdtb3VzZWxlYXZlJykge1xyXG4gICAgICAgICAgICAgICAgaW5pdCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogb24gY2xpY2sgZXZlbnQgKi9cclxuICAgICAgICBlbHNlIGlmIChwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUgJiYgaXNJbkFycmF5KCdidWJibGUnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChwSlMudG1wLmJ1YmJsZV9jbGlja2luZykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGR4X21vdXNlID0gcC54IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3gsXHJcbiAgICAgICAgICAgICAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSxcclxuICAgICAgICAgICAgICAgICAgICBkaXN0X21vdXNlID0gTWF0aC5zcXJ0KGR4X21vdXNlICogZHhfbW91c2UgKyBkeV9tb3VzZSAqIGR5X21vdXNlKSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lX3NwZW50ID0gKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfdGltZSkgLyAxMDAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aW1lX3NwZW50ID4gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLnRtcC5idWJibGVfZHVyYXRpb25fZW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGltZV9zcGVudCA+IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbiAqIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBwSlMudG1wLmJ1YmJsZV9jbGlja2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy50bXAuYnViYmxlX2R1cmF0aW9uX2VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcHJvY2VzcyhidWJibGVfcGFyYW0sIHBhcnRpY2xlc19wYXJhbSwgcF9vYmpfYnViYmxlLCBwX29iaiwgaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYnViYmxlX3BhcmFtICE9IHBhcnRpY2xlc19wYXJhbSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXBKUy50bXAuYnViYmxlX2R1cmF0aW9uX2VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlzdF9tb3VzZSA8PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwX29ial9idWJibGUgIT0gdW5kZWZpbmVkKSB2YXIgb2JqID0gcF9vYmpfYnViYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB2YXIgb2JqID0gcF9vYmo7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqICE9IGJ1YmJsZV9wYXJhbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHBfb2JqIC0gKHRpbWVfc3BlbnQgKiAocF9vYmogLSBidWJibGVfcGFyYW0pIC8gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWQgPT0gJ3NpemUnKSBwLnJhZGl1c19idWJibGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWQgPT0gJ29wYWNpdHknKSBwLm9wYWNpdHlfYnViYmxlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWQgPT0gJ3NpemUnKSBwLnJhZGl1c19idWJibGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWQgPT0gJ29wYWNpdHknKSBwLm9wYWNpdHlfYnViYmxlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBfb2JqX2J1YmJsZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZV90bXAgPSBwX29iaiAtICh0aW1lX3NwZW50ICogKHBfb2JqIC0gYnViYmxlX3BhcmFtKSAvIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlmID0gYnViYmxlX3BhcmFtIC0gdmFsdWVfdG1wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBidWJibGVfcGFyYW0gKyBkaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWQgPT0gJ3NpemUnKSBwLnJhZGl1c19idWJibGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZCA9PSAnb3BhY2l0eScpIHAub3BhY2l0eV9idWJibGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocEpTLnRtcC5idWJibGVfY2xpY2tpbmcpIHtcclxuICAgICAgICAgICAgICAgIC8qIHNpemUgKi9cclxuICAgICAgICAgICAgICAgIHByb2Nlc3MocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUsIHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSwgcC5yYWRpdXNfYnViYmxlLCBwLnJhZGl1cywgJ3NpemUnKTtcclxuICAgICAgICAgICAgICAgIC8qIG9wYWNpdHkgKi9cclxuICAgICAgICAgICAgICAgIHByb2Nlc3MocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHksIHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSwgcC5vcGFjaXR5X2J1YmJsZSwgcC5vcGFjaXR5LCAnb3BhY2l0eScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4ubW9kZXMucmVwdWxzZVBhcnRpY2xlID0gZnVuY3Rpb24gKHApIHtcclxuXHJcbiAgICAgICAgaWYgKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZSAmJiBpc0luQXJyYXkoJ3JlcHVsc2UnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSAmJiBwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPT0gJ21vdXNlbW92ZScpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBkeF9tb3VzZSA9IHAueCAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LFxyXG4gICAgICAgICAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSxcclxuICAgICAgICAgICAgICAgIGRpc3RfbW91c2UgPSBNYXRoLnNxcnQoZHhfbW91c2UgKiBkeF9tb3VzZSArIGR5X21vdXNlICogZHlfbW91c2UpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5vcm1WZWMgPSB7IHg6IGR4X21vdXNlIC8gZGlzdF9tb3VzZSwgeTogZHlfbW91c2UgLyBkaXN0X21vdXNlIH0sXHJcbiAgICAgICAgICAgICAgICByZXB1bHNlUmFkaXVzID0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZSxcclxuICAgICAgICAgICAgICAgIHZlbG9jaXR5ID0gMTAwLFxyXG4gICAgICAgICAgICAgICAgcmVwdWxzZUZhY3RvciA9IGNsYW1wKCgxIC8gcmVwdWxzZVJhZGl1cykgKiAoLTEgKiBNYXRoLnBvdyhkaXN0X21vdXNlIC8gcmVwdWxzZVJhZGl1cywgMikgKyAxKSAqIHJlcHVsc2VSYWRpdXMgKiB2ZWxvY2l0eSwgMCwgNTApO1xyXG5cclxuICAgICAgICAgICAgdmFyIHBvcyA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHAueCArIG5vcm1WZWMueCAqIHJlcHVsc2VGYWN0b3IsXHJcbiAgICAgICAgICAgICAgICB5OiBwLnkgKyBub3JtVmVjLnkgKiByZXB1bHNlRmFjdG9yXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChwSlMucGFydGljbGVzLm1vdmUub3V0X21vZGUgPT0gJ2JvdW5jZScpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwb3MueCAtIHAucmFkaXVzID4gMCAmJiBwb3MueCArIHAucmFkaXVzIDwgcEpTLmNhbnZhcy53KSBwLnggPSBwb3MueDtcclxuICAgICAgICAgICAgICAgIGlmIChwb3MueSAtIHAucmFkaXVzID4gMCAmJiBwb3MueSArIHAucmFkaXVzIDwgcEpTLmNhbnZhcy5oKSBwLnkgPSBwb3MueTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHAueCA9IHBvcy54O1xyXG4gICAgICAgICAgICAgICAgcC55ID0gcG9zLnk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgZWxzZSBpZiAocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlICYmIGlzSW5BcnJheSgncmVwdWxzZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBKUy50bXAucmVwdWxzZV9maW5pc2gpIHtcclxuICAgICAgICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9jb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBKUy50bXAucmVwdWxzZV9jb3VudCA9PSBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9maW5pc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocEpTLnRtcC5yZXB1bHNlX2NsaWNraW5nKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcHVsc2VSYWRpdXMgPSBNYXRoLnBvdyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlIC8gNiwgMyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGR4ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3ggLSBwLngsXHJcbiAgICAgICAgICAgICAgICAgICAgZHkgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSAtIHAueSxcclxuICAgICAgICAgICAgICAgICAgICBkID0gZHggKiBkeCArIGR5ICogZHk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGZvcmNlID0gLXJlcHVsc2VSYWRpdXMgLyBkICogMTtcclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBwcm9jZXNzKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IE1hdGguYXRhbjIoZHksIGR4KTtcclxuICAgICAgICAgICAgICAgICAgICBwLnZ4ID0gZm9yY2UgKiBNYXRoLmNvcyhmKTtcclxuICAgICAgICAgICAgICAgICAgICBwLnZ5ID0gZm9yY2UgKiBNYXRoLnNpbihmKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBKUy5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZSA9PSAnYm91bmNlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogcC54ICsgcC52eCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHAueSArIHAudnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zLnggKyBwLnJhZGl1cyA+IHBKUy5jYW52YXMudykgcC52eCA9IC1wLnZ4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwb3MueCAtIHAucmFkaXVzIDwgMCkgcC52eCA9IC1wLnZ4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zLnkgKyBwLnJhZGl1cyA+IHBKUy5jYW52YXMuaCkgcC52eSA9IC1wLnZ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwb3MueSAtIHAucmFkaXVzIDwgMCkgcC52eSA9IC1wLnZ5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgaWYgKGQgPD0gcmVwdWxzZVJhZGl1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3MoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBiYW5nIC0gc2xvdyBtb3Rpb24gbW9kZVxyXG4gICAgICAgICAgICAgICAgLy8gaWYoIXBKUy50bXAucmVwdWxzZV9maW5pc2gpe1xyXG4gICAgICAgICAgICAgICAgLy8gICBpZihkIDw9IHJlcHVsc2VSYWRpdXMpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHByb2Nlc3MoKTtcclxuICAgICAgICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvLyAgIHByb2Nlc3MoKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwSlMudG1wLnJlcHVsc2VfY2xpY2tpbmcgPT0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcC52eCA9IHAudnhfaTtcclxuICAgICAgICAgICAgICAgICAgICBwLnZ5ID0gcC52eV9pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcEpTLmZuLm1vZGVzLmdyYWJQYXJ0aWNsZSA9IGZ1bmN0aW9uIChwKSB7XHJcblxyXG4gICAgICAgIGlmIChwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGUgJiYgcEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID09ICdtb3VzZW1vdmUnKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZHhfbW91c2UgPSBwLnggLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCxcclxuICAgICAgICAgICAgICAgIGR5X21vdXNlID0gcC55IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ksXHJcbiAgICAgICAgICAgICAgICBkaXN0X21vdXNlID0gTWF0aC5zcXJ0KGR4X21vdXNlICogZHhfbW91c2UgKyBkeV9tb3VzZSAqIGR5X21vdXNlKTtcclxuXHJcbiAgICAgICAgICAgIC8qIGRyYXcgYSBsaW5lIGJldHdlZW4gdGhlIGN1cnNvciBhbmQgdGhlIHBhcnRpY2xlIGlmIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZW0gaXMgdW5kZXIgdGhlIGNvbmZpZyBkaXN0YW5jZSAqL1xyXG4gICAgICAgICAgICBpZiAoZGlzdF9tb3VzZSA8PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG9wYWNpdHlfbGluZSA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIubGluZV9saW5rZWQub3BhY2l0eSAtIChkaXN0X21vdXNlIC8gKDEgLyBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmxpbmVfbGlua2VkLm9wYWNpdHkpKSAvIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2U7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG9wYWNpdHlfbGluZSA+IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyogc3R5bGUgKi9cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29sb3JfbGluZSA9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3JfcmdiX2xpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgnICsgY29sb3JfbGluZS5yICsgJywnICsgY29sb3JfbGluZS5nICsgJywnICsgY29sb3JfbGluZS5iICsgJywnICsgb3BhY2l0eV9saW5lICsgJyknO1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVXaWR0aCA9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9wSlMuY2FudmFzLmN0eC5saW5lQ2FwID0gJ3JvdW5kJzsgLyogcGVyZm9ybWFuY2UgaXNzdWUgKi9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyogcGF0aCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4Lm1vdmVUbyhwLngsIHAueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHgubGluZVRvKHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LCBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIC8qIC0tLS0tLS0tLS0gcEpTIGZ1bmN0aW9ucyAtIHZlbmRvcnMgLS0tLS0tLS0tLS0tICovXHJcblxyXG4gICAgcEpTLmZuLnZlbmRvcnMuZXZlbnRzTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvKiBldmVudHMgdGFyZ2V0IGVsZW1lbnQgKi9cclxuICAgICAgICBpZiAocEpTLmludGVyYWN0aXZpdHkuZGV0ZWN0X29uID09ICd3aW5kb3cnKSB7XHJcbiAgICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LmVsID0gd2luZG93O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LmVsID0gcEpTLmNhbnZhcy5lbDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvKiBkZXRlY3QgbW91c2UgcG9zIC0gb24gaG92ZXIgLyBjbGljayBldmVudCAqL1xyXG4gICAgICAgIGlmIChwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGUgfHwgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlKSB7XHJcblxyXG4gICAgICAgICAgICAvKiBlbCBvbiBtb3VzZW1vdmUgKi9cclxuICAgICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocEpTLmludGVyYWN0aXZpdHkuZWwgPT0gd2luZG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvc194ID0gZS5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NfeSA9IGUuY2xpZW50WTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3NfeCA9IGUub2Zmc2V0WCB8fCBlLmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc195ID0gZS5vZmZzZXRZIHx8IGUuY2xpZW50WTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCA9IHBvc194O1xyXG4gICAgICAgICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kgPSBwb3NfeTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocEpTLnRtcC5yZXRpbmEpIHtcclxuICAgICAgICAgICAgICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCAqPSBwSlMuY2FudmFzLnB4cmF0aW87XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kgKj0gcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9ICdtb3VzZW1vdmUnO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvKiBlbCBvbiBvbm1vdXNlbGVhdmUgKi9cclxuICAgICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ggPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID0gJ21vdXNlbGVhdmUnO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogb24gY2xpY2sgZXZlbnQgKi9cclxuICAgICAgICBpZiAocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlKSB7XHJcblxyXG4gICAgICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeCA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194O1xyXG4gICAgICAgICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3kgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeTtcclxuICAgICAgICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncHVzaCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBKUy5mbi5tb2Rlcy5wdXNoUGFydGljbGVzKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iLCBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYiA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBKUy5mbi5tb2Rlcy5wdXNoUGFydGljbGVzKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iLCBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwSlMuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyZW1vdmUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcEpTLmZuLm1vZGVzLnJlbW92ZVBhcnRpY2xlcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZW1vdmUucGFydGljbGVzX25iKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYnViYmxlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBKUy50bXAuYnViYmxlX2NsaWNraW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVwdWxzZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwSlMudG1wLnJlcHVsc2VfY2xpY2tpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcEpTLnRtcC5yZXB1bHNlX2NvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9maW5pc2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9jbGlja2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgcEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kdXJhdGlvbiAqIDEwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH07XHJcblxyXG4gICAgcEpTLmZuLnZlbmRvcnMuZGVuc2l0eUF1dG9QYXJ0aWNsZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmIChwSlMucGFydGljbGVzLm51bWJlci5kZW5zaXR5LmVuYWJsZSkge1xyXG5cclxuICAgICAgICAgICAgLyogY2FsYyBhcmVhICovXHJcbiAgICAgICAgICAgIHZhciBhcmVhID0gcEpTLmNhbnZhcy5lbC53aWR0aCAqIHBKUy5jYW52YXMuZWwuaGVpZ2h0IC8gMTAwMDtcclxuICAgICAgICAgICAgaWYgKHBKUy50bXAucmV0aW5hKSB7XHJcbiAgICAgICAgICAgICAgICBhcmVhID0gYXJlYSAvIChwSlMuY2FudmFzLnB4cmF0aW8gKiAyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyogY2FsYyBudW1iZXIgb2YgcGFydGljbGVzIGJhc2VkIG9uIGRlbnNpdHkgYXJlYSAqL1xyXG4gICAgICAgICAgICB2YXIgbmJfcGFydGljbGVzID0gYXJlYSAqIHBKUy5wYXJ0aWNsZXMubnVtYmVyLnZhbHVlIC8gcEpTLnBhcnRpY2xlcy5udW1iZXIuZGVuc2l0eS52YWx1ZV9hcmVhO1xyXG5cclxuICAgICAgICAgICAgLyogYWRkIG9yIHJlbW92ZSBYIHBhcnRpY2xlcyAqL1xyXG4gICAgICAgICAgICB2YXIgbWlzc2luZ19wYXJ0aWNsZXMgPSBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aCAtIG5iX3BhcnRpY2xlcztcclxuICAgICAgICAgICAgaWYgKG1pc3NpbmdfcGFydGljbGVzIDwgMCkgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMoTWF0aC5hYnMobWlzc2luZ19wYXJ0aWNsZXMpKTtcclxuICAgICAgICAgICAgZWxzZSBwSlMuZm4ubW9kZXMucmVtb3ZlUGFydGljbGVzKG1pc3NpbmdfcGFydGljbGVzKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrT3ZlcmxhcCA9IGZ1bmN0aW9uIChwMSwgcG9zaXRpb24pIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHAyID0gcEpTLnBhcnRpY2xlcy5hcnJheVtpXTtcclxuXHJcbiAgICAgICAgICAgIHZhciBkeCA9IHAxLnggLSBwMi54LFxyXG4gICAgICAgICAgICAgICAgZHkgPSBwMS55IC0gcDIueSxcclxuICAgICAgICAgICAgICAgIGRpc3QgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpc3QgPD0gcDEucmFkaXVzICsgcDIucmFkaXVzKSB7XHJcbiAgICAgICAgICAgICAgICBwMS54ID0gcG9zaXRpb24gPyBwb3NpdGlvbi54IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMudztcclxuICAgICAgICAgICAgICAgIHAxLnkgPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnkgOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy5oO1xyXG4gICAgICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tPdmVybGFwKHAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgIHBKUy5mbi52ZW5kb3JzLmNyZWF0ZVN2Z0ltZyA9IGZ1bmN0aW9uIChwKSB7XHJcblxyXG4gICAgICAgIC8qIHNldCBjb2xvciB0byBzdmcgZWxlbWVudCAqL1xyXG4gICAgICAgIHZhciBzdmdYbWwgPSBwSlMudG1wLnNvdXJjZV9zdmcsXHJcbiAgICAgICAgICAgIHJnYkhleCA9IC8jKFswLTlBLUZdezMsNn0pL2dpLFxyXG4gICAgICAgICAgICBjb2xvcmVkU3ZnWG1sID0gc3ZnWG1sLnJlcGxhY2UocmdiSGV4LCBmdW5jdGlvbiAobSwgciwgZywgYikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHAuY29sb3IucmdiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbG9yX3ZhbHVlID0gJ3JnYmEoJyArIHAuY29sb3IucmdiLnIgKyAnLCcgKyBwLmNvbG9yLnJnYi5nICsgJywnICsgcC5jb2xvci5yZ2IuYiArICcsJyArIHAub3BhY2l0eSArICcpJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbG9yX3ZhbHVlID0gJ2hzbGEoJyArIHAuY29sb3IuaHNsLmggKyAnLCcgKyBwLmNvbG9yLmhzbC5zICsgJyUsJyArIHAuY29sb3IuaHNsLmwgKyAnJSwnICsgcC5vcGFjaXR5ICsgJyknO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yX3ZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLyogcHJlcGFyZSB0byBjcmVhdGUgaW1nIHdpdGggY29sb3JlZCBzdmcgKi9cclxuICAgICAgICB2YXIgc3ZnID0gbmV3IEJsb2IoW2NvbG9yZWRTdmdYbWxdLCB7IHR5cGU6ICdpbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgnIH0pLFxyXG4gICAgICAgICAgICBET01VUkwgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkwgfHwgd2luZG93LFxyXG4gICAgICAgICAgICB1cmwgPSBET01VUkwuY3JlYXRlT2JqZWN0VVJMKHN2Zyk7XHJcblxyXG4gICAgICAgIC8qIGNyZWF0ZSBwYXJ0aWNsZSBpbWcgb2JqICovXHJcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBwLmltZy5vYmogPSBpbWc7XHJcbiAgICAgICAgICAgIHAuaW1nLmxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIERPTVVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcclxuICAgICAgICAgICAgcEpTLnRtcC5jb3VudF9zdmcrKztcclxuICAgICAgICB9KTtcclxuICAgICAgICBpbWcuc3JjID0gdXJsO1xyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHBKUy5mbi52ZW5kb3JzLmRlc3Ryb3lwSlMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocEpTLmZuLmRyYXdBbmltRnJhbWUpO1xyXG4gICAgICAgIGNhbnZhc19lbC5yZW1vdmUoKTtcclxuICAgICAgICBwSlNEb20gPSBudWxsO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcEpTLmZuLnZlbmRvcnMuZHJhd1NoYXBlID0gZnVuY3Rpb24gKGMsIHN0YXJ0WCwgc3RhcnRZLCBzaWRlTGVuZ3RoLCBzaWRlQ291bnROdW1lcmF0b3IsIHNpZGVDb3VudERlbm9taW5hdG9yKSB7XHJcblxyXG4gICAgICAgIC8vIEJ5IFByb2dyYW1taW5nIFRob21hcyAtIGh0dHBzOi8vcHJvZ3JhbW1pbmd0aG9tYXMud29yZHByZXNzLmNvbS8yMDEzLzA0LzAzL24tc2lkZWQtc2hhcGVzL1xyXG4gICAgICAgIHZhciBzaWRlQ291bnQgPSBzaWRlQ291bnROdW1lcmF0b3IgKiBzaWRlQ291bnREZW5vbWluYXRvcjtcclxuICAgICAgICB2YXIgZGVjaW1hbFNpZGVzID0gc2lkZUNvdW50TnVtZXJhdG9yIC8gc2lkZUNvdW50RGVub21pbmF0b3I7XHJcbiAgICAgICAgdmFyIGludGVyaW9yQW5nbGVEZWdyZWVzID0gKDE4MCAqIChkZWNpbWFsU2lkZXMgLSAyKSkgLyBkZWNpbWFsU2lkZXM7XHJcbiAgICAgICAgdmFyIGludGVyaW9yQW5nbGUgPSBNYXRoLlBJIC0gTWF0aC5QSSAqIGludGVyaW9yQW5nbGVEZWdyZWVzIC8gMTgwOyAvLyBjb252ZXJ0IHRvIHJhZGlhbnNcclxuICAgICAgICBjLnNhdmUoKTtcclxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGMudHJhbnNsYXRlKHN0YXJ0WCwgc3RhcnRZKTtcclxuICAgICAgICBjLm1vdmVUbygwLCAwKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZGVDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGMubGluZVRvKHNpZGVMZW5ndGgsIDApO1xyXG4gICAgICAgICAgICBjLnRyYW5zbGF0ZShzaWRlTGVuZ3RoLCAwKTtcclxuICAgICAgICAgICAgYy5yb3RhdGUoaW50ZXJpb3JBbmdsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vYy5zdHJva2UoKTtcclxuICAgICAgICBjLmZpbGwoKTtcclxuICAgICAgICBjLnJlc3RvcmUoKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHBKUy5mbi52ZW5kb3JzLmV4cG9ydEltZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB3aW5kb3cub3BlbihwSlMuY2FudmFzLmVsLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyksICdfYmxhbmsnKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHBKUy5mbi52ZW5kb3JzLmxvYWRJbWcgPSBmdW5jdGlvbiAodHlwZSkge1xyXG5cclxuICAgICAgICBwSlMudG1wLmltZ19lcnJvciA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgaWYgKHBKUy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjICE9ICcnKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PSAnc3ZnJykge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCBwSlMucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYyk7XHJcbiAgICAgICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBKUy50bXAuc291cmNlX3N2ZyA9IGRhdGEuY3VycmVudFRhcmdldC5yZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrQmVmb3JlRHJhdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBKUyAtIEltYWdlIG5vdCBmb3VuZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcEpTLnRtcC5pbWdfZXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLnRtcC5pbWdfb2JqID0gaW1nO1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrQmVmb3JlRHJhdygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gcEpTLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmM7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBwSlMgLSBObyBpbWFnZS5zcmMnKTtcclxuICAgICAgICAgICAgcEpTLnRtcC5pbWdfZXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4udmVuZG9ycy5kcmF3ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAocEpTLnBhcnRpY2xlcy5zaGFwZS50eXBlID09ICdpbWFnZScpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChwSlMudG1wLmltZ190eXBlID09ICdzdmcnKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBKUy50bXAuY291bnRfc3ZnID49IHBKUy5wYXJ0aWNsZXMubnVtYmVyLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmRyYXdBbmltRnJhbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcEpTLmZuLmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi52ZW5kb3JzLmRyYXcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdzdGlsbCBsb2FkaW5nLi4uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwSlMudG1wLmltZ19lcnJvcikgcEpTLmZuLmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi52ZW5kb3JzLmRyYXcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocEpTLnRtcC5pbWdfb2JqICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKSBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHBKUy5mbi5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShwSlMuZm4udmVuZG9ycy5kcmF3KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwSlMudG1wLmltZ19lcnJvcikgcEpTLmZuLmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi52ZW5kb3JzLmRyYXcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xyXG4gICAgICAgICAgICBpZiAoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmRyYXdBbmltRnJhbWUpO1xyXG4gICAgICAgICAgICBlbHNlIHBKUy5mbi5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShwSlMuZm4udmVuZG9ycy5kcmF3KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tCZWZvcmVEcmF3ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvLyBpZiBzaGFwZSBpcyBpbWFnZVxyXG4gICAgICAgIGlmIChwSlMucGFydGljbGVzLnNoYXBlLnR5cGUgPT0gJ2ltYWdlJykge1xyXG5cclxuICAgICAgICAgICAgaWYgKHBKUy50bXAuaW1nX3R5cGUgPT0gJ3N2ZycgJiYgcEpTLnRtcC5zb3VyY2Vfc3ZnID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcEpTLnRtcC5jaGVja0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUoY2hlY2spO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnaW1hZ2VzIGxvYWRlZCEgY2FuY2VsIGNoZWNrJyk7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy50bXAuY2hlY2tBbmltRnJhbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwSlMudG1wLmltZ19lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmluaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBwSlMuZm4udmVuZG9ycy5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmluaXQoKTtcclxuICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuZHJhdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4udmVuZG9ycy5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvKiBpbml0IGNhbnZhcyArIHBhcnRpY2xlcyAqL1xyXG4gICAgICAgIHBKUy5mbi5yZXRpbmFJbml0KCk7XHJcbiAgICAgICAgcEpTLmZuLmNhbnZhc0luaXQoKTtcclxuICAgICAgICBwSlMuZm4uY2FudmFzU2l6ZSgpO1xyXG4gICAgICAgIHBKUy5mbi5jYW52YXNQYWludCgpO1xyXG4gICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNDcmVhdGUoKTtcclxuICAgICAgICBwSlMuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcygpO1xyXG5cclxuICAgICAgICAvKiBwYXJ0aWNsZXMubGluZV9saW5rZWQgLSBjb252ZXJ0IGhleCBjb2xvcnMgdG8gcmdiICovXHJcbiAgICAgICAgcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5jb2xvcl9yZ2JfbGluZSA9IGhleFRvUmdiKHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3IpO1xyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHBKUy5mbi52ZW5kb3JzLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoaXNJbkFycmF5KCdpbWFnZScsIHBKUy5wYXJ0aWNsZXMuc2hhcGUudHlwZSkpIHtcclxuICAgICAgICAgICAgcEpTLnRtcC5pbWdfdHlwZSA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjLnN1YnN0cihwSlMucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYy5sZW5ndGggLSAzKTtcclxuICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMubG9hZEltZyhwSlMudG1wLmltZ190eXBlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwSlMuZm4udmVuZG9ycy5jaGVja0JlZm9yZURyYXcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAvKiAtLS0tLS0tLS0tIHBKUyAtIHN0YXJ0IC0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHJcbiAgICBwSlMuZm4udmVuZG9ycy5ldmVudHNMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICBwSlMuZm4udmVuZG9ycy5zdGFydCgpO1xyXG5cclxuXHJcblxyXG59O1xyXG5cclxuLyogLS0tLS0tLS0tLSBnbG9iYWwgZnVuY3Rpb25zIC0gdmVuZG9ycyAtLS0tLS0tLS0tLS0gKi9cclxuXHJcbk9iamVjdC5kZWVwRXh0ZW5kID0gZnVuY3Rpb24gKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcclxuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHNvdXJjZSkge1xyXG4gICAgICAgIGlmIChzb3VyY2VbcHJvcGVydHldICYmIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgJiZcclxuICAgICAgICAgICAgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IGRlc3RpbmF0aW9uW3Byb3BlcnR5XSB8fCB7fTtcclxuICAgICAgICAgICAgYXJndW1lbnRzLmNhbGxlZShkZXN0aW5hdGlvbltwcm9wZXJ0eV0sIHNvdXJjZVtwcm9wZXJ0eV0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IHNvdXJjZVtwcm9wZXJ0eV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uO1xyXG59O1xyXG5cclxud2luZG93LnJlcXVlc3RBbmltRnJhbWUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xyXG4gICAgICAgIH07XHJcbn0pKCk7XHJcblxyXG53aW5kb3cuY2FuY2VsUmVxdWVzdEFuaW1GcmFtZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgd2luZG93LndlYmtpdENhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgIHdpbmRvdy5tb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICB3aW5kb3cub0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgIHdpbmRvdy5tc0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgIGNsZWFyVGltZW91dFxyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7XHJcbiAgICAvLyBCeSBUaW0gRG93biAtIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU2MjQxMzkvMzQ5MzY1MFxyXG4gICAgLy8gRXhwYW5kIHNob3J0aGFuZCBmb3JtIChlLmcuIFwiMDNGXCIpIHRvIGZ1bGwgZm9ybSAoZS5nLiBcIjAwMzNGRlwiKVxyXG4gICAgdmFyIHNob3J0aGFuZFJlZ2V4ID0gL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTtcclxuICAgIGhleCA9IGhleC5yZXBsYWNlKHNob3J0aGFuZFJlZ2V4LCBmdW5jdGlvbiAobSwgciwgZywgYikge1xyXG4gICAgICAgIHJldHVybiByICsgciArIGcgKyBnICsgYiArIGI7XHJcbiAgICB9KTtcclxuICAgIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcclxuICAgIHJldHVybiByZXN1bHQgPyB7XHJcbiAgICAgICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXHJcbiAgICAgICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXHJcbiAgICAgICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNilcclxuICAgIH0gOiBudWxsO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2xhbXAobnVtYmVyLCBtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG51bWJlciwgbWluKSwgbWF4KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGlzSW5BcnJheSh2YWx1ZSwgYXJyYXkpIHtcclxuICAgIHJldHVybiBhcnJheS5pbmRleE9mKHZhbHVlKSA+IC0xO1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLSBwYXJ0aWNsZXMuanMgZnVuY3Rpb25zIC0gc3RhcnQgLS0tLS0tLS0tLS0tICovXHJcblxyXG53aW5kb3cucEpTRG9tID0gW107XHJcblxyXG53aW5kb3cucGFydGljbGVzSlMgPSBmdW5jdGlvbiAodGFnX2lkLCBwYXJhbXMpIHtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKHBhcmFtcyk7XHJcblxyXG4gICAgLyogbm8gc3RyaW5nIGlkPyBzbyBpdCdzIG9iamVjdCBwYXJhbXMsIGFuZCBzZXQgdGhlIGlkIHdpdGggZGVmYXVsdCBpZCAqL1xyXG4gICAgaWYgKHR5cGVvZiAodGFnX2lkKSAhPSAnc3RyaW5nJykge1xyXG4gICAgICAgIHBhcmFtcyA9IHRhZ19pZDtcclxuICAgICAgICB0YWdfaWQgPSAncGFydGljbGVzLWpzJztcclxuICAgIH1cclxuXHJcbiAgICAvKiBubyBpZD8gc2V0IHRoZSBpZCB0byBkZWZhdWx0IGlkICovXHJcbiAgICBpZiAoIXRhZ19pZCkge1xyXG4gICAgICAgIHRhZ19pZCA9ICdwYXJ0aWNsZXMtanMnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIHBKUyBlbGVtZW50cyAqL1xyXG4gICAgdmFyIHBKU190YWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWdfaWQpLFxyXG4gICAgICAgIHBKU19jYW52YXNfY2xhc3MgPSAncGFydGljbGVzLWpzLWNhbnZhcy1lbCcsXHJcbiAgICAgICAgZXhpc3RfY2FudmFzID0gcEpTX3RhZy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHBKU19jYW52YXNfY2xhc3MpO1xyXG5cclxuICAgIC8qIHJlbW92ZSBjYW52YXMgaWYgZXhpc3RzIGludG8gdGhlIHBKUyB0YXJnZXQgdGFnICovXHJcbiAgICBpZiAoZXhpc3RfY2FudmFzLmxlbmd0aCkge1xyXG4gICAgICAgIHdoaWxlIChleGlzdF9jYW52YXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBwSlNfdGFnLnJlbW92ZUNoaWxkKGV4aXN0X2NhbnZhc1swXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIGNyZWF0ZSBjYW52YXMgZWxlbWVudCAqL1xyXG4gICAgdmFyIGNhbnZhc19lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY2FudmFzX2VsLmNsYXNzTmFtZSA9IHBKU19jYW52YXNfY2xhc3M7XHJcblxyXG4gICAgLyogc2V0IHNpemUgY2FudmFzICovXHJcbiAgICBjYW52YXNfZWwuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIGNhbnZhc19lbC5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuXHJcbiAgICAvKiBhcHBlbmQgY2FudmFzICovXHJcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFnX2lkKS5hcHBlbmRDaGlsZChjYW52YXNfZWwpO1xyXG5cclxuICAgIC8qIGxhdW5jaCBwYXJ0aWNsZS5qcyAqL1xyXG4gICAgaWYgKGNhbnZhcyAhPSBudWxsKSB7XHJcbiAgICAgICAgcEpTRG9tLnB1c2gobmV3IHBKUyh0YWdfaWQsIHBhcmFtcykpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbndpbmRvdy5wYXJ0aWNsZXNKUy5sb2FkID0gZnVuY3Rpb24gKHRhZ19pZCwgcGF0aF9jb25maWdfanNvbiwgY2FsbGJhY2spIHtcclxuXHJcbiAgICAvKiBsb2FkIGpzb24gY29uZmlnICovXHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub3BlbignR0VUJywgcGF0aF9jb25maWdfanNvbik7XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSBKU09OLnBhcnNlKGRhdGEuY3VycmVudFRhcmdldC5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cucGFydGljbGVzSlModGFnX2lkLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBKUyAtIFhNTEh0dHBSZXF1ZXN0IHN0YXR1czogJyArIHhoci5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBKUyAtIEZpbGUgY29uZmlnIG5vdCBmb3VuZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHhoci5zZW5kKCk7XHJcblxyXG59OyIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9saWJzL1BhcnRpY2xlc1wiXG4vLyBpbXBvcnQgUGFydGljbGVzIGZyb20gJ3JlYWN0LXBhcnRpY2xlcy1qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLXNlbGYtY2VudGVyXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGhlaWdodDogXCI5MHZoXCJcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI0MHZoXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL1NwYWNlWExvZ29GdWxsLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIlNwYWNlWCBMb2dvXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGQtYmxvY2tcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL3d3dy5zcGFjZXguY29tL1wiLCBcIl8gYmxhbmtcIik7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiA3MDAsIGN1cnNvcjogXCJwb2ludGVyXCIgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCB3LTUwIGp1c3RpZnktY29udGVudC1hcm91bmQgZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtYi00XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcImxhdW5jaF9nZW5lcmF0b3JcIil9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBMYXVuY2ggR2VuZXJhdG9yXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbWItNFwiPlxuICAgICAgICAgICAgICAgIExhdW5jaCBTZWFyY2hcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBib3R0b206IDQwLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgIERldmVsb3BlZCBieSA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9hbmR5dHViZWVlXCI+QW5kcmV3IFlhbmc8L2E+ICZjb3B5OyB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==