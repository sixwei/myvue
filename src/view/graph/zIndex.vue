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
        msg: '层次设计/n 在node的shape为image的时候，图片会覆盖掉点到点的连线',
        gdata: {
          nodes: [{
            id: 'node1',
            x: 300,
            y: 200,
            label: '萧庆',
            size:[300,400],
            labelCfg: {
              position: 'bottom'
            },
            shape: 'image',
            img: 'https://img2.bosszhipin.com/boss/avatar/avatar_13.png',
            index:-10,
          }, {
            id: 'node2',
            x: 400,
            y: 100,
            shape: 'image',
            label: '语雀',
            labelCfg: {
              position: 'bottom'
            },
            img: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg'
          },{
            id: 'node3',
            x: 500,
            y: 300,
            shape: 'image',
            label: '语雀',
            labelCfg: {
              position: 'bottom'
            },
            img: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg'
          }],
          edges: [
            {
            id: 'edge1',
            target: 'node2',
            source: 'node3',
            color: "red",
              index:20,
            style: {
              endArrow: true
            },
            label: '你好,我好',
            labelCfg: {
              style: {stroke: 'white',lineWidth: 5} // 加白边框
            }
          },

            {
              source: 'node3',
              target: 'node4',
              style: {
                endArrow: true,
                stroke: 'blue',
                lineDash: [2, 2]
              },
              shape: 'my-edge',
              label: '随便连连\n换行',
              curveLevel: 4,
              labelCfg: {
                refY: -20,
                refX: 0,
                autoRotate: true,
                style: {
                  fill: 'red'
                }
              }
            }
            ]
        }
      }
    },
    mounted(){
      this.initGraph()
    },
    methods:{

      initGraph(){
        const data = this.gdata
        const Util = G6.Util;


        G6.registerNode('myNode',{

        })

        G6.registerEdge('my-edge', {
          // 复写控制点的逻辑
          getControlPoints(cfg) {
            const controlPoints = []; // 指定controlPoints
            const level = cfg.curveLevel || 1; // 从 -10， 10
            const offset = level * -20; // 根据不同的level 计算不同的偏移
            const { startPoint, endPoint } = cfg;
            const innerPoint = Util.getControlPoint(startPoint, endPoint, 0.5, offset);
            controlPoints.push(innerPoint);
            return controlPoints;
          },
        }, 'quadratic');

        // 图画布的定义
        const graph = new G6.Graph({
          container: 'mountNode',
          height: window.innerHeight-275,
          width:window.innerWidth-200,
        });

        graph.data(data);
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
