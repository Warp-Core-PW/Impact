(function(Scratch) {
  'use strict';
  class graph {
    getInfo() {
      return {
        id: 'nonameawagraph',
        name: 'Graph 2D',
        color1: '#ff976c',
        color2: '#cc7956',
        color3: '#e58861',
        blocks: [
           {
             opcode: 'line_section',
             blockType: Scratch.BlockType.REPORTER,
             text: 'line section ([x1],[y1]) to ([x2],[y2])',
             arguments: {
             x1: {
                 type: Scratch.ArgumentType.NUMBER,
                 defaultValue: '-100'
             },
             y1: {
                 type: Scratch.ArgumentType.NUMBER,
                 defaultValue: '0'
             },
             x2: {
                 type: Scratch.ArgumentType.NUMBER,
                 defaultValue: '0'
             },
             y2: {
                 type: Scratch.ArgumentType.NUMBER,
                 defaultValue: '0'
               },
            }
          },
          {
            opcode: 'vertical',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[a] ⊥ [b]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.ANGLE,
                defaultValue: '0'
              },
              b: {
                type: Scratch.ArgumentType.ANGLE,
                defaultValue: '90'
              },
            }
          },
          '---',
          {
            opcode: 'triangle',
            blockType: Scratch.BlockType.REPORTER,
            text: 'triangle ([x1],[y1]) ([x2],[y2]) ([x3],[y3]) \'s [CS]',
            arguments: {
              x1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              y1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '10'
              },
              x2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '10'
              },
              y2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '10'
              },
              x3: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '10'
              },
              y3: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              CS: {
                type: Scratch.ArgumentType.STRING,
                menu: 'cs'
              },
            },
          },
          {
            opcode: 'triangle_s',
            blockType: Scratch.BlockType.REPORTER,
            text: 'triangle [s1] [s2] [s3] \'s square',
            arguments: {
              s1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '3'
              },
              s2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '4'
              },
              s3: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '5'
              },
            },
          },
          {
              opcode: 'quadrilateral',
              blockType: Scratch.BlockType.REPORTER,
              text: 'quadrangle ([x1],[y1]) ([x2],[y2]) ([x3],[y3]) ([x4],[y4]) \'s [CS]',
              arguments: {
                x1: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '0'
                },
                y1: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '10'
                },
                x2: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '10'
                },
                y2: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '10'
                },
                x3: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '10'
                },
                y3: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '0'
                },
                x4: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '0'
                },
                y4: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '0'
                },
                CS: {
                  type: Scratch.ArgumentType.STRING,
                  menu: 'cs'
                },
              },
            },
            {
              opcode: 'graph',
              blockType: Scratch.BlockType.REPORTER,
              text: 'graph [graph] \'s [CS]',
              arguments: {
                graph: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '[[0,0], [10,0], [10,-10], [0,-10]]'
                },
                CS: {
                  type: Scratch.ArgumentType.STRING,
                  menu: 'cs'
                },
              },
            },
            '---',
            {
              opcode: 'round',
              blockType: Scratch.BlockType.REPORTER,
              text: 'round: [rd][a] \'s [CS]',
              arguments: {
                rd: {
                  type: Scratch.ArgumentType.STRING,
                  menu: 'rd'
                },
                a: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '10'
                },
                CS: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'cs'
                  },
              },
            },
            '---',
            {
              opcode: 'pi',
              disableMonitor: true,
              blockType: Scratch.BlockType.REPORTER,
              text: '𝜋',
            },
         ],
         menus: {
            rd: {
              acceptReporters: true,
              items: [
                {
                  text: 'radius',
                  value: 'r'
                },
                {
                  text: 'diameter',
                  value: 'd'
                }
              ]
            },
            cs: {
                acceptReporters: true,
                items: [
                  {
                    text: 'square',
                    value: 's'
                  },
                  {
                    text: 'circumference',
                    value: 'c'
                  }
                ]
              }
          }
      };
    }
    line_section(args) {
      return Math.sqrt(Math.pow(args.x1 - args.x2, 2) + Math.pow(args.y1 - args.y2, 2));
    }
    vertical(args) {
        if (isNaN(args.a) || isNaN(args.b)){
          return false;
        } else {
          return ((args.a - (args.b - 90)) % 180) == 0;
        }
    }
    triangle(args) {
      if (args.CS == 's'){
        let points = [[args.x1,args.y1], [args.x2,args.y2], [args.x3,args.y3]];
        let area = 0;
        let n = points.length;
        for (let i = 0; i < n; i++) {
            let x1 = points[i][0];
            let y1 = points[i][1];
            let x2 = points[(i + 1) % n][0];
            let y2 = points[(i + 1) % n][1];
            area += x1 * y2;
            area -= x2 * y1;
        }
        area = Math.abs(area) / 2;
        return (area);
      }
      if (args.CS == 'c'){
        let i = 0;
        i += Math.sqrt(Math.pow(args.x1 - args.x2, 2) + Math.pow(args.y1 - args.y2, 2));
        i += Math.sqrt(Math.pow(args.x2 - args.x3, 2) + Math.pow(args.y2 - args.y3, 2));
        i += Math.sqrt(Math.pow(args.x3 - args.x1, 2) + Math.pow(args.y3 - args.y1, 2));
        return i;
      }
      return 0;
    }
    triangle_s(args) {
      const s = (args.s1 + args.s2 + args.s3) / 2;
      const area = Math.sqrt(s * (s - args.s1) * (s - args.s2) * (s - args.s3));
      return area;
    }
    quadrilateral(args) {
      if (args.CS == 's'){
        let points = [[args.x1,args.y1], [args.x2,args.y2], [args.x3,args.y3], [args.x4,args.y4]];
        let area = 0;
        let n = points.length;
        for (let i = 0; i < n; i++) {
            let x1 = points[i][0];
            let y1 = points[i][1];
            let x2 = points[(i + 1) % n][0];
            let y2 = points[(i + 1) % n][1];
            area += x1 * y2;
            area -= x2 * y1;
        }
        area = Math.abs(area) / 2;
        return (area);
      }
      if (args.CS == 'c'){
        let i = 0;
        i += Math.sqrt(Math.pow(args.x1 - args.x2, 2) + Math.pow(args.y1 - args.y2, 2));
        i += Math.sqrt(Math.pow(args.x2 - args.x3, 2) + Math.pow(args.y2 - args.y3, 2));
        i += Math.sqrt(Math.pow(args.x3 - args.x4, 2) + Math.pow(args.y3 - args.y4, 2));
        i += Math.sqrt(Math.pow(args.x4 - args.x1, 2) + Math.pow(args.y4 - args.y1, 2));
        return i;
      }
      return 0;
    }
    graph(args) {
      let points = JSON.parse (args.graph);
      let n = points.length;
      if (args.CS == 's'){
        let area = 0;
        for (let i = 0; i < n; i++) {
          let x1 = points[i][0];
          let y1 = points[i][1];
          let x2 = points[(i + 1) % n][0];
          let y2 = points[(i + 1) % n][1];
          area += x1 * y2;
          area -= x2 * y1;
        }
        area = Math.abs(area) / 2;
        return (area);
      }
      if (args.CS == 'c'){
        let x1, x2, y1, y2;
        let j = 0;
        j = 0;
        var i_end = n - 1;
        var i_inc = 1;
        if (0 > i_end) {
          i_inc = -i_inc;
        }
        for (let i = 0; i_inc >= 0 ? i <= i_end : i >= i_end; i += i_inc) {
          x1 = points[((i + 1) - 1)][0];
          x2 = i == n - 1 ? points[0][0] : points[((i + 2) - 1)][0];
          y1 = points[((i + 1) - 1)][1];
          y2 = i == n - 1 ? points[0][1] : points[((i + 2) - 1)][1];
          j = (typeof j == 'number' ? j : 0) + Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2));
        }
        return j;
      }
      return 0;
    }
    round(args) {
        if (args.CS == 'c'){
            return 2 * Math.PI * (args.rd == 'r' ? args.a : args.a / 2);
        }
        if (args.CS == 's'){
            return Math.PI * ((args.rd == 'r' ? args.a : args.a / 2) ** 2);
        }
    }
    pi() {
        return Math.PI;
    }
  }
  Scratch.extensions.register(new graph());
})(Scratch);