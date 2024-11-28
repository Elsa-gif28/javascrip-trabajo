(function($){
$.widget("custom.responsiveSlider", {
widgetEventPrefix: "em",
options:{
    _sliderwidth: 1000,
    sliderweigth: 600,
    auto:true,
    sliderDelay:3000,

},
_create: function() {
    var_slider = this;
    this.element.css("padding", "0");

    _slider.contenedor = this.element;


    _slider._buil();

    _slider._builButtonBar();
},
_setsize: function() {
    this.options._sliderwidth =$(this.slides.get(0)).outerwidth(false);
    this.options._sliderheigt =$(this.slides.get(0)).outerheigth(false);


},
_buil:function(){
    var_slider = this;
    _slider.slides =   _slider.contenedor.find ("li");

    _slider._setsize();

    _slider.contenedor.addClass("responsiveSlider_ul")
    .width(_slider.slides.length * _slider.options._sliderwidth)
    .heigth(_slider.options._sliderheigt);


    _slider.slides.addClass ("responsiveSlider_li")
    .width(_slider.options.sliderwidth)
    .heigth(_slider.options.sliderheigt);

    _slider.slidercontainer = $("<div class='responsiveSlider_sliderContainer'></div> ");
    _slider.contenedor.before(_sliderContainer);
    _slider.slidercontainer.append(_slidercontenedor)
    .width(_slider.options.sliderwidth)
    .heigth(_slider.options.sliderheigt);


    _slider.setTimer();


},
_builButtonBar: function(){
    var_slider = this;
    if

}, 

setTimer: function(){
    var_slider = this;
    if(_slider.options.auto){
        _slider.timerInterval = setInterval(function(){}._slider.options.sliderDelay);
        alert("hola");
        }

},

});

} (jQuery));
