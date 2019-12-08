// Native UI
const Materials = require('Materials');
const Scene = require('Scene');
const NativeUI = require('NativeUI');
const Textures = require('Textures');

// Slider
var slider = NativeUI.slider;
var lastSliderValue = 1;
var persistenceTimer = null;

// Load Slider
slider.visible = true;

// Find your objects
const rectangle = Scene.root.find('rectangle0');

// Set an index of 0
const index = 0;

// Create a configuration object
const configuration = {

    // The index of the selected item in the picker
    selectedIndex: index,

    // The image textures to use as the items in the picker
    // Make sure these textures are set to uncompressed or this *will not work*
    items: [
	{image_texture: Textures.get('neutral')},
        {image_texture: Textures.get('1')},
        {image_texture: Textures.get('3')},
        {image_texture: Textures.get('5')},
        {image_texture: Textures.get('7')},
        {image_texture: Textures.get('9')},
        {image_texture: Textures.get('11')},
        {image_texture: Textures.get('13')},
        {image_texture: Textures.get('15')},
        {image_texture: Textures.get('17')}

    ],

    // OPTIONAL:
    // In this example we are switching materials
    // so I have included an object of materials
    // that matches the order of the textures above
    mats: [
        {material: Materials.get("color0")},
        {material: Materials.get("color1")},
        {material: Materials.get("color2")},
        {material: Materials.get("color3")},
        {material: Materials.get("color4")},
        {material: Materials.get("color5")},
        {material: Materials.get("color6")},
        {material: Materials.get("color7")},
        {material: Materials.get("color8")},
        {material: Materials.get("color9")}
    ]
};

// Create our picker
const picker = NativeUI.picker;

// Load the configuration
picker.configure(configuration);

// Set the visibility to true
picker.visible = true;

// When the user selects an item form the picker, pass the index
// so we can select the materials to switch out
picker.selectedIndex.monitor().subscribe(function(val) {

    // Set the material to the first rectangle
    rectangle.material = configuration.mats[val.newValue].material;
    const mat = configuration.mats[val.newValue].material;
    
    slider.value.monitor({fireOnInitialValue: false}).subscribe(function(val) {
        lastSliderValue = val.newValue;
        mat.opacity = lastSliderValue;
    });


});
