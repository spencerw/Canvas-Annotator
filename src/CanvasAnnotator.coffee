@overlay = {} unless @overlay?

class CanvasAnnotator
	constructor: (@imageCanvas, @wrapperDiv) ->
		@annotationCanvas = document.createElement('canvas')
		@wrapperCanvas = document.createElement('canvas')
		
		width = @imageCanvas.getAttribute('width')
		height = @imageCanvas.getAttribute('height')
		@wrapperCanvas.setAttribute('width', width)
		@wrapperCanvas.setAttribute('height', height)
		@wrapperCanvas.setAttribute('id', 'wrapper')
		@annotationCanvas.setAttribute('width', width)
		@annotationCanvas.setAttribute('height', height)
		@wrapperDiv.appendChild(@wrapperCanvas)
		
		@drawAll()
		
	drawAll: ->
		wrapperContext = @wrapperCanvas.getContext('2d')
		
		@drawAnnotations()
		wrapperContext.drawImage(@imageCanvas, 0, 0)
		wrapperContext.drawImage(@annotationCanvas, 0, 0)
		return
		
	drawAnnotations: ->
		context = @annotationCanvas.getContext('2d')
		context.beginPath()
		context.rect(0, 0, 100, 100)
		context.fillStyle = 'yellow'
		context.fill()
		context.lineWidth = 7
		context.strokeStyle = 'black'
		context.stroke()
		return
		

@overlay.CanvasAnnotator = CanvasAnnotator
