<script>
    export default {
        props: ['moduleStyle', 'id', 'xiuList', 'maxWidth', 'gapWidth', 'gapHeight',
            'height', 'item', 'index', 'uniqueId', 'cols', 'resize'],
        data(){
            return {
                style: {}
            }
        },
        mounted(){
            this.initStyle(...this.initData())

            this.resize && window.addEventListener('resize', ()=> {
                this.resizeEvt(()=> {
                    this.initStyle(...this.initData())
                })
            })
        },
        methods: {
            resizeEvt: function (callback) {
                if (this.timeoutId) {
                    clearTimeout(this.timeoutId)
                }
                return this.timeoutId = setTimeout(function () {
                    callback();
                }, 500);

            },
            initData: function () {
                const parentWidth = parseFloat(window.getComputedStyle(this.$el.parentElement).width),
                        newCols = Math.ceil(parentWidth / ((+this.maxWidth) + (+this.gapWidth))),
                        newWidth = (parentWidth - (newCols - 1) * this.gapWidth) / newCols;
                return [newCols, newWidth]
            },
            initStyle: function (cols, width) {
                let uid = 'phonePanelHeights_' + this.uniqueId || 'init';
                if (this.index === 0) {
                    this.$root[uid] = []
                }
                const itemWidth = width || +this.width,
                        height = +this.height,
                        gapWidth = +this.gapWidth,
                        gapHeight = +this.gapHeight,
                        index = +this.index - 1,
                        heights = this.$root[uid],
                        colIndex = (index + 1) % cols;
                let top = 0, left = colIndex * (itemWidth + gapWidth);
                if (heights.length < cols) {
                    heights[heights.length] = {left: left, top: top + height + gapHeight};
                } else if (heights.length == cols) {
                    let topList = [];
                    heights.forEach(function (val) {
                        topList.push(val.top)
                    })
                    const topMax = Math.min(...topList);
                    for (let index in heights) {
                        if (heights[index].top === topMax) {
                            top += heights[index].top;
                            left = heights[index].left;
                            heights[index] = {left: heights[index].left, top: top + height + gapHeight};
                            break;
                        }
                    }
                }
                this.style = {
                    height: height + 'px',
                    position: "absolute",
                    width: itemWidth + 'px',
                    left: left + 'px',
                    top: top + 'px'
                }
            }
        }
    }
</script>
