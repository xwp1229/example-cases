cc.Class({
    extends: cc.Component,

    properties: {
        buttons: [cc.Node],
        cameraNode: {
            default: null,
            type: cc.Node
        },
        cameraButtonLabel: {
            default: null,
            type: cc.Label
        },

        root: {
            default: null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function () {
        // camera not support canvas
        this.cameraButtonLabel.node.parent.active = cc.game.renderType !== cc.game.RENDER_TYPE_CANVAS;
        cc.director.setDisplayStats(true);
        var g = this.getComponent(cc.Graphics);
        if (g) {
            g.lineWidth = 10;
            g.fillColor = cc.hexToColor('#ff0000');

            g.moveTo(-20, 0);
            g.lineTo(0, -100);
            g.lineTo(20, 0);
            g.lineTo(0, 100);
            g.close();

            g.stroke();
            g.fill();
        }
        // this.changeCamera();
    },

    spawnGameObject: function (event, data) {
        cc.log("data : = " + data);
        var node = this.buttons[data | 0];
        node.runAction(cc.sequence(cc.moveBy(3, cc.p(1200, 0)), cc.moveBy(3, cc.p(-1200, 0))));
    },

    onDestroy: function () {
        cc.director.setDisplayStats(false);
    },

    changeCamera: function () {
        if (this.root.group === 'Default') {
            this.root.group = 'Actor';
            this.cameraButtonLabel.string = 'Disable Camera';
        }
        else {
            this.root.group = 'Default';
            this.cameraButtonLabel.string = 'Enable Camera';
        }
    }
});
