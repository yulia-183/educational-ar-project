import * as THREE from 'three';
import { MindARThree } from 'mindar';
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

document.addEventListener("DOMContentLoaded", () => {
    const start = async () => {
        const mindarThree = new MindARThree({
            container: document.body,
            imageTargetSrc: "targets.mind",
            maxTrack: 4,
            uiLoading: "yes",
            uiScanning: "yes",
            uiError: "no"
        });

        const { renderer, scene, camera } = mindarThree;



        // Створюємо матеріали для фігур
        const materials = {
            cube: new THREE.MeshPhongMaterial({ color: 0xff6b6b, transparent: true, opacity: 0.8 }),
            sphere: new THREE.MeshPhongMaterial({ color: 0x4ecdc4, transparent: true, opacity: 0.8 }),
            pyramid: new THREE.MeshPhongMaterial({ color: 0x45b7d1, transparent: true, opacity: 0.8 }),
            parallelepiped: new THREE.MeshPhongMaterial({ color: 0x96ceb4, transparent: true, opacity: 0.8 })
        };

        // Створюємо геометрії
        const geometries = {
            cube: new THREE.BoxGeometry(1, 1, 1),
            sphere: new THREE.SphereGeometry(0.5, 32, 32),
            pyramid: new THREE.ConeGeometry(0.5, 1, 3),
            parallelepiped: new THREE.BoxGeometry(1.5, 0.8, 1)
        };

        // Формули для фігур
        const formulas = {
            cube: {
                name: "Куб",
                surface: "S = 6a²",
                volume: "V = a³",
                description: "де a - довжина ребра"
            },
            sphere: {
                name: "Сфера",
                surface: "S = 4πr²",
                volume: "V = (4/3)πr³",
                description: "де r - радіус сфери"
            },
            pyramid: {
                name: "Трикутна піраміда",
                surface: "S = S_основи + S_бічні",
                volume: "V = (1/3) × S_основи × h",
                description: "де h - висота піраміди"
            },
            parallelepiped: {
                name: "Прямокутний паралелепіпед",
                surface: "S = 2(ab + bc + ac)",
                volume: "V = a × b × c",
                description: "де a, b, c - довжини ребер"
            }
        };

        // Створюємо групи для кожного маркера
        const anchors = [];
        const meshes = [];
        const infoElements = [];



        // Маркер 0 - Квадрат (Куб)
        const anchor0 = mindarThree.addAnchor(3);
        const cube = new THREE.Mesh(geometries.cube, materials.cube);
        cube.position.set(0, 0.5, 0);
        cube.rotation.set(0.2, 0.2, 0);
        anchor0.group.add(cube);
        anchors.push(anchor0);
        meshes.push(cube);

        // Маркер 1 - Коло (Сфера)
        const anchor1 = mindarThree.addAnchor(0);
        const sphere = new THREE.Mesh(geometries.sphere, materials.sphere);
        sphere.position.set(0, 0.5, 0);
        anchor1.group.add(sphere);
        anchors.push(anchor1);
        meshes.push(sphere);

        // Маркер 2 - Трикутник (Піраміда)
        const anchor2 = mindarThree.addAnchor(1);
        const pyramid = new THREE.Mesh(geometries.pyramid, materials.pyramid);
        pyramid.position.set(0, 0.5, 0);
        pyramid.rotation.set(0, 0, 0);
        anchor2.group.add(pyramid);
        anchors.push(anchor2);
        meshes.push(pyramid);

        // Маркер 3 - Прямокутник (Паралелепіпед)
        const anchor3 = mindarThree.addAnchor(2);
        const parallelepiped = new THREE.Mesh(geometries.parallelepiped, materials.parallelepiped);
        parallelepiped.position.set(0, 0.4, 0);
        parallelepiped.rotation.set(0.1, 0.3, 0);
        anchor3.group.add(parallelepiped);
        anchors.push(anchor3);
        meshes.push(parallelepiped);

        // Додаємо освітлення
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        // Створюємо UI елементи для формул
        const createInfoElement = (formula, index) => {
            const infoDiv = document.createElement('div');
            infoDiv.id = `info-${index}`;
            infoDiv.style.cssText = `
                position: absolute;
                top: 20px;
                left: 20px;
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 15px;
                border-radius: 10px;
                font-family: Arial, sans-serif;
                font-size: 14px;
                max-width: 300px;
                display: none;
                z-index: 1000;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            `;
            
            infoDiv.innerHTML = `
                <h3 style="margin: 0 0 10px 0; color: #ffd700;">${formula.name}</h3>
                <p style="margin: 5px 0;"><strong>Площа поверхні:</strong> ${formula.surface}</p>
                <p style="margin: 5px 0;"><strong>Об'єм:</strong> ${formula.volume}</p>
                <p style="margin: 5px 0; font-style: italic;">${formula.description}</p>
            `;
            
            document.body.appendChild(infoDiv);
            return infoDiv;
        };

        // Створюємо інформаційні елементи для кожної фігури
        const shapeTypes = ['cube', 'sphere', 'pyramid', 'parallelepiped'];
        shapeTypes.forEach((shape, index) => {
            infoElements.push(createInfoElement(formulas[shape], index));
        });

        // Обробка подій для маркерів
        anchors.forEach((anchor, index) => {
            anchor.onTargetFound = () => {
                console.log(`Маркер ${index} знайдено`);
                infoElements[index].style.display = 'block';
            };

            anchor.onTargetLost = () => {
                console.log(`Маркер ${index} втрачено`);
                infoElements[index].style.display = 'none';
            };
        });

        // Анімація фігур
        const animate = () => {
            meshes.forEach((mesh, index) => {
                if (anchors[index].group.visible) {
                    mesh.rotation.y += 0.01;
                    if (index === 0) { // Куб
                        mesh.rotation.x += 0.005;
                    } else if (index === 1) { // Сфера
                        mesh.rotation.z += 0.008;
                    } else if (index === 2) { // Піраміда
                        mesh.rotation.y += 0.015;
                    } else if (index === 3) { // Паралелепіпед
                        mesh.rotation.x += 0.007;
                        mesh.rotation.z += 0.003;
                    }
                }
            });
        };

        // Запуск AR
        await mindarThree.start();
        renderer.setAnimationLoop(() => {
            animate();
            renderer.render(scene, camera);
        });
    };

    start().catch(error => {
        console.error('Помилка запуску AR:', error);
        
        // Показуємо повідомлення про помилку
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255, 0, 0, 0.9);
            color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            z-index: 9999;
            font-family: Arial, sans-serif;
        `;
        errorDiv.innerHTML = `
            <h3>Помилка запуску AR</h3>
            <p>Перевірте підключення до інтернету та доступ до камери</p>
            <p>Помилка: ${error.message}</p>
        `;
        document.body.appendChild(errorDiv);
    });
});