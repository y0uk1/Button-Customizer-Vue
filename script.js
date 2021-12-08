var vm = new Vue({
    el: "#app",
    data: {
        fontSize: "10",
        color: "#000000",
        backgroundColor: "#FFFFFF",
        borderRadius: "0",
        opacity: "1",
        isButtonDisabled: false,
        text: "Custom Button"
    },
    computed: {
        styleObject: function(){
            styleObj = {
                fontSize: `${this.fontSize}px`,
                color: this.color,
                backgroundColor: this.backgroundColor,
                borderRadius: `${this.borderRadius}%`,
                opacity: this.opacity,
            }
            return styleObj
        }
    }
})