const modelViewer = document.querySelector('model-viewer');

modelViewer.addEventListener('load', () => {
    modelViewer.model.materials.forEach(material => {
        const baseTexture = material.pbrMetallicRoughness.baseColorTexture;

        if (baseTexture && baseTexture.texture && baseTexture.texture.sampler) {
            const sampler = baseTexture.texture.sampler;
            sampler.setMinFilter(9728);
            sampler.setMagFilter(9728);
        }
    });
});