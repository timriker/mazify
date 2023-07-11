
AFRAME.registerComponent("rig", {
    init: function () {
        document.addEventListener('keydown', event => {
            // Jump
            if (event.code === 'Space') {
                let rig = document.querySelector("#rig");
                if (rig.getAttribute("position").y <= 4) { // prevent successive jump
                    rig.setAttribute('velocity', '0 12 0');
                }
            }
        })

        this.el.addEventListener('collide', (evt) => {
            if (evt.detail.body.el.id != undefined && evt.detail.body.el.id == "finish-tile") {
                this.el.sceneEl.exitVR()

                let finishDlgElm = document.querySelector("#finishDialog")
                finishDlgElm.setAttribute("style", "display: block");
                this.finished = true;
            }
        });
    }
})
