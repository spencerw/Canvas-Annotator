(function() {
  var CanvasAnnotator;

  if (this.overlay == null) this.overlay = {};

  CanvasAnnotator = (function() {

    function CanvasAnnotator(imageCanvas, wrapperDiv) {
      var height, width;
      this.imageCanvas = imageCanvas;
      this.wrapperDiv = wrapperDiv;
      this.annotationCanvas = document.createElement('canvas');
      this.wrapperCanvas = document.createElement('canvas');
      width = this.imageCanvas.getAttribute('width');
      height = this.imageCanvas.getAttribute('height');
      this.wrapperCanvas.setAttribute('width', width);
      this.wrapperCanvas.setAttribute('height', height);
      this.wrapperCanvas.setAttribute('id', 'wrapper');
      this.annotationCanvas.setAttribute('width', width);
      this.annotationCanvas.setAttribute('height', height);
      this.wrapperDiv.appendChild(this.wrapperCanvas);
      this.drawAll();
    }

    CanvasAnnotator.prototype.drawAll = function() {
      var wrapperContext;
      wrapperContext = this.wrapperCanvas.getContext('2d');
      this.drawAnnotations();
      wrapperContext.drawImage(this.imageCanvas, 0, 0);
      wrapperContext.drawImage(this.annotationCanvas, 0, 0);
    };

    CanvasAnnotator.prototype.drawAnnotations = function() {
      var context;
      context = this.annotationCanvas.getContext('2d');
      context.beginPath();
      context.rect(0, 0, 100, 100);
      context.fillStyle = 'yellow';
      context.fill();
      context.lineWidth = 7;
      context.strokeStyle = 'black';
      context.stroke();
    };

    return CanvasAnnotator;

  })();

  this.overlay.CanvasAnnotator = CanvasAnnotator;

}).call(this);
