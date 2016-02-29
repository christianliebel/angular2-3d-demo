System.register([], function(exports_1) {
    var WebGLRenderer, Scene, TrackballControls, PerspectiveCamera, Mesh, RenderService;
    return {
        setters:[],
        execute: function() {
            RenderService = (function () {
                function RenderService() {
                }
                RenderService.prototype.init = function (container) {
                    var _this = this;
                    this.addStats();
                    var width = window.innerWidth;
                    var height = window.innerHeight - 90;
                    this.scene = new THREE.Scene();
                    this.camera = new THREE.PerspectiveCamera(45, width / height);
                    this.camera.position.set(0, 0, 100);
                    this.renderer = new THREE.WebGLRenderer({ antialias: true });
                    this.renderer.setPixelRatio(window.devicePixelRatio);
                    this.renderer.setSize(width, height);
                    this.renderer.setClearColor(0x000000);
                    container.appendChild(this.renderer.domElement);
                    this.controls = new THREE.TrackballControls(this.camera, container);
                    // Sphere
                    var textureLoader = new THREE.TextureLoader();
                    textureLoader.load('assets/earth.jpg', function (t) {
                        var geometry = new THREE.SphereGeometry(5, 50, 50);
                        var material = new THREE.MeshLambertMaterial({ map: t });
                        _this.sphere = new THREE.Mesh(geometry, material);
                        _this.scene.add(_this.sphere);
                    });
                    // Lights
                    var ambientLight = new THREE.AmbientLight(0xcccccc);
                    this.scene.add(ambientLight);
                    var pointLight = new THREE.PointLight(0xffffff);
                    pointLight.position.set(300, 0, 300);
                    this.scene.add(pointLight);
                    // start animation
                    this.animate();
                    // bind to window resizes
                    window.addEventListener('resize', function (_) { return _this.onResize(); });
                };
                RenderService.prototype.addStats = function () {
                    this.stats = new Stats();
                    document.body.appendChild(this.stats.domElement);
                };
                RenderService.prototype.addStars = function (starsCount) {
                    var stars = new THREE.Geometry();
                    var starMaterial = new THREE.PointCloudMaterial({ color: 0xffffff });
                    for (var i = 0; i < starsCount; i++) {
                        var x = Math.random() * 2000 - 1000;
                        var y = Math.random() * 2000 - 1000;
                        var z = Math.random() * 2000 - 1000;
                        var star = new THREE.Vector3(x, y, z);
                        stars.vertices.push(star);
                    }
                    var pointCloud = new THREE.PointCloud(stars, starMaterial);
                    this.scene.add(pointCloud);
                };
                RenderService.prototype.updateScale = function (newScale) {
                    var that = this;
                    new TWEEN.Tween({ scale: this.sphere.scale.x })
                        .to({ scale: newScale }, 1000)
                        .easing(TWEEN.Easing.Elastic.InOut)
                        .onUpdate(function () {
                        that.sphere.scale.set(this.scale, this.scale, this.scale);
                    })
                        .start();
                };
                RenderService.prototype.animate = function () {
                    var _this = this;
                    window.requestAnimationFrame(function (_) { return _this.animate(); });
                    this.stats.update();
                    this.controls.update();
                    TWEEN.update();
                    this.renderer.render(this.scene, this.camera);
                };
                RenderService.prototype.onResize = function () {
                    var width = window.innerWidth;
                    var height = window.innerHeight - 90;
                    this.camera.aspect = width / height;
                    this.camera.updateProjectionMatrix();
                    this.renderer.setSize(width, height);
                };
                return RenderService;
            })();
            exports_1("RenderService", RenderService);
        }
    }
});
//# sourceMappingURL=renderService.js.map