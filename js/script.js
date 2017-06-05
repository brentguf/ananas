

$(document).ready(function() {

  // Scroll reveal
  window.sr = ScrollReveal();
  sr.reveal('section');

  // Waypoint

  var waypoint = new Waypoint({
    element: document.getElementById('countup-trigger'),
    handler: function() {
      // Stat count up
      $('.stat-figure').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },

        {

          duration: 1200,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        }); 

      });
    }
  })

  
});

