<template>
  <div class="content-wrapper">
    <div class="title-wrapper">
      {{msg}}
    </div>
    <div class="can-display">
      <div id="mountNode"></div>
    </div>

  </div>
</template>

<script>
  import G6 from '@antv/g6'
  export default {
    data () {
      return {
        msg: '连线设计',
        gdata:  {
          nodes:[
            {
              id: 'node1',
              shape:'circle',
              x:200,
              y:200,
            },
            {
              id: 'node2',
              shape: 'circle',
              x:500,
              y:200,
            }
          ],
          edges:[]
        }
      }
    },
    mounted(){
      this.initGraph()
    },
    methods:{

      initGraph(){
        const data = this.gdata
        G6.registerBehavior('click-add-edge', {
          getEvents() {
            return {
              'node:click': 'onClick' ,
              mousemove: 'onMousemove'
            };
          },
          onClick(ev) {
            console.log('点击事件')
            const node = ev.item;
            const graph = this.graph;
            const point = {x: ev.x, y: ev.y};
            const model = node.getModel();
            // 如果在添加边的过程中，再次点击另一个节点，结束边的添加
            console.log(this.edge)
            if (this.addingEdge && this.edge) {

              console.log(this.edge)
              graph.updateItem(this.edge, {
                target: model.id
              });
              this.edge = null;
              this.addingEdge = false;
            } else {
              // 点击节点，触发增加边
              this.edge = graph.addItem('edge', {
                source: model.id,
                target: point
              });
              this.addingEdge = true;
            }

            console.log(this.edge)
          },
          onMousemove(ev) {
            const point = {x: ev.x, y: ev.y};
            if (this.addingEdge && this.edge) {
              // 增加边的过程中，移动时边跟着移动
              this.graph.updateItem(this.edge, {
                target: point
              });
            }
          }
        });
        const graph = new G6.Graph({
          container: 'mountNode',
          height: window.innerHeight-275,
          width:window.innerWidth-200,
          modes: {
            default: [{
              type:'click-add-edge'
            }],
          }
        });

        graph.read(data);
        graph.render();
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .content-wrapper{
    padding: 5px 15px;
    height: 100%;
    width: 100%;
    .title-wrapper{
      height: 50px;
      line-height: 50px;
      font-size: 15px;
      padding-left: 50px;
    }
    .can-display{
      display: flex;
      #moundNode{
        flex: 1;
      }
    }
  }

</style>
