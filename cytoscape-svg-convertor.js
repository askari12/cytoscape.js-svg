;(function() { 'use strict';

    // registers the extension on a cytoscape lib ref
    var register = function( cytoscape ){

        if( !cytoscape ){ return; } // can't register if cytoscape unspecified

        cytoscape( 'core', 'svgConvertor', function(){
            var cy = this; 
            
            // makes an svg object
            
            var draw = SVG('create');            
            var nested = draw.nested();
                        
            // Creates a collection of nodes
            var eles = cy.collection('node') ;
            for (var i = 0 ; i < eles.length ; i++) {
                makeNodeBody(eles[i] , nested) ;
            }
                
            function makeEdges(edge) {
                
            }    
                
            window.console.log(nested.svg());
            return this; // chainability
        } );
    };
    
                // makes the whole node body
            function makeNodeBody(node , nested) {
                var shape = node.style('shape');
                var currNode;
                    
                // if shape is a circle
                if (shape === 'ellipse') {
                    currNode = nested.ellipse(node.style('width') , node.style('height')) ;
                    currNode.x(node.renderedPosition('x'));
                    currNode.y(node.renderedPosition('y'));
                    
                    currNode.fill({color : node.style('background-color') , opacity : node.style('background-opacity') });        
                    
                    currNode.style('stroke-width' , node.style('border-width'));
                    currNode.style('stroke' , node.style('border-color'));
                    currNode.style('stroke-opacity' , node.style('border-opacity'));
                    
                    if (node.style('border-style') === "dotted") {
                        currNode.style('stroke-dasharray' , "1, 1");
                    } else if (node.style('border-style') === "dashed") {
                        currNode.style('stroke-dasharray' , "5, 10");
                    }
                } else if (shape === 'recatngle') {
                    currNode = nested.rect(node.style('width') , node.style('height')) ;
                    currNode.x(node.renderedPosition('x'));
                    currNode.y(node.renderedPosition('y'));
                    
                    currNode.fill({color : node.style('background-color') , opacity : node.style('background-opacity') });        
                    
                    currNode.style('stroke-width' , node.style('border-width'));
                    currNode.style('stroke' , node.style('border-color'));
                    currNode.style('stroke-opacity' , node.style('border-opacity'));
                    
                    if (node.style('border-style') === "dotted") {
                        currNode.style('stroke-dasharray' , "1, 1");
                    } else if (node.style('border-style') === "dashed") {
                        currNode.style('stroke-dasharray' , "5, 10");
                    }
                } else if (shape === 'roundrectangle') {
                    currNode = nested.rect(node.style('width') , node.style('height')) ;
                    currNode.x(node.renderedPosition('x'));
                    currNode.y(node.renderedPosition('y'));
                    
                    currNode.radius(8);
                    
                    currNode.fill({color : node.style('background-color') , opacity : node.style('background-opacity') });        
                    
                    currNode.style('stroke-width' , node.style('border-width'));
                    currNode.style('stroke' , node.style('border-color'));
                    currNode.style('stroke-opacity' , node.style('border-opacity'));
                    
                    if (node.style('border-style') === "dotted") {
                        currNode.style('stroke-dasharray' , "1, 1");
                    } else if (node.style('border-style') === "dashed") {
                        currNode.style('stroke-dasharray' , "5, 10");
                    }
                } else if (shape === 'triangle') {
                    currNode = nested.polygon("0,0 20,30 -20,30") ;
                    currNode.x(node.renderedPosition('x'));
                    currNode.y(node.renderedPosition('y'));
                    
                    currNode.fill({color : node.style('background-color') , opacity : node.style('background-opacity') });        
                    
                    currNode.style('stroke-width' , node.style('border-width'));
                    currNode.style('stroke' , node.style('border-color'));
                    currNode.style('stroke-opacity' , node.style('border-opacity'));
                    
                    if (node.style('border-style') === "dotted") {
                        currNode.style('stroke-dasharray' , "1, 1");
                    } else if (node.style('border-style') === "dashed") {
                        currNode.style('stroke-dasharray' , "5, 10");
                    } 
                } else if (shape === 'pentagon') {
                    currNode = nested.polygon("0,-30 -29,-9 -18,24 18,24 29,-9") ;
                    currNode.x(node.renderedPosition('x'));
                    currNode.y(node.renderedPosition('y'));
                    
                    currNode.fill({color : node.style('background-color') , opacity : node.style('background-opacity') });        
                    
                    currNode.style('stroke-width' , node.style('border-width'));
                    currNode.style('stroke' , node.style('border-color'));
                    currNode.style('stroke-opacity' , node.style('border-opacity'));
                    
                    if (node.style('border-style') === "dotted") {
                        currNode.style('stroke-dasharray' , "1, 5");
                    } else if (node.style('border-style') === "dashed") {
                        currNode.style('stroke-dasharray' , "5, 10");
                    }
                } else if (shape === 'hexagon') {
                    currNode = nested.polygon("15,-26 -15,-26 -30,0 -15,26 15,26 30,0") ;
                    currNode.x(node.renderedPosition('x'));
                    currNode.y(node.renderedPosition('y'));
                    
                    currNode.fill({color : node.style('background-color') , opacity : node.style('background-opacity') });        
                    
                    currNode.style('stroke-width' , node.style('border-width'));
                    currNode.style('stroke' , node.style('border-color'));
                    currNode.style('stroke-opacity' , node.style('border-opacity'));
                    
                    if (node.style('border-style') === "dotted") {
                        currNode.style('stroke-dasharray' , "1, 1");
                    } else if (node.style('border-style') === "dashed") {
                        currNode.style('stroke-dasharray' , "5, 10");
                    }
                } else if (shape === 'heptagon') {
                    currNode = nested.polygon("0,-20 -16,-12 -19,4 -9,18 9,18 19,4 16,-12") ;
                    currNode.x(node.renderedPosition('x'));
                    currNode.y(node.renderedPosition('y'));
                    
                    currNode.fill({color : node.style('background-color') , opacity : node.style('background-opacity') });        
                    
                    currNode.style('stroke-width' , node.style('border-width'));
                    currNode.style('stroke' , node.style('border-color'));
                    currNode.style('stroke-opacity' , node.style('border-opacity'));
                    
                    if (node.style('border-style') === "dotted") {
                        currNode.style('stroke-dasharray' , "1, 1");
                    } else if (node.style('border-style') === "dashed") {
                        currNode.style('stroke-dasharray' , "5, 10");
                    }
                } else if (shape === 'octagon') {
                    currNode = nested.polygon("8,-18 -8,-18 -18,-8 -18,8 -8,18 8,18 18,8 18,-8") ;
                    currNode.x(node.renderedPosition('x'));
                    currNode.y(node.renderedPosition('y'));
                    
                    currNode.fill({color : node.style('background-color') , opacity : node.style('background-opacity') });        
                    
                    currNode.style('stroke-width' , node.style('border-width'));
                    currNode.style('stroke' , node.style('border-color'));
                    currNode.style('stroke-opacity' , node.style('border-opacity'));
                    
                    if (node.style('border-style') === "dotted") {
                        currNode.style('stroke-dasharray' , "1, 1");
                    } else if (node.style('border-style') === "dashed") {
                        currNode.style('stroke-dasharray' , "5, 10");
                    }
                } else if (shape === 'star') {
                    currNode = nested.polygon("25,2.5 10,49.5 47.5,19.5 2.5,19.5 40,49.5") ;
                    currNode.x(node.renderedPosition('x'));
                    currNode.y(node.renderedPosition('y'));
                    
                    currNode.fill({color : node.style('background-color') , opacity : node.style('background-opacity') });        
                    
                    currNode.style('stroke-width' , node.style('border-width'));
                    currNode.style('stroke' , node.style('border-color'));
                    currNode.style('stroke-opacity' , node.style('border-opacity'));
                    
                    if (node.style('border-style') === "dotted") {
                        currNode.style('stroke-dasharray' , "1, 1");
                    } else if (node.style('border-style') === "dashed") {
                        currNode.style('stroke-dasharray' , "5, 10");
                    }
                } else if (shape === 'diamond') {
                    currNode = nested.polygon("0,0 15,15 0,30  -15,15") ;
                    currNode.x(node.renderedPosition('x'));
                    currNode.y(node.renderedPosition('y'));
                    
                    currNode.fill({color : node.style('background-color') , opacity : node.style('background-opacity') });        
                    
                    currNode.style('stroke-width' , node.style('border-width'));
                    currNode.style('stroke' , node.style('border-color'));
                    currNode.style('stroke-opacity' , node.style('border-opacity'));
                    
                    if (node.style('border-style') === "dotted") {
                        currNode.style('stroke-dasharray' , "1, 1");
                    } else if (node.style('border-style') === "dashed") {
                        currNode.style('stroke-dasharray' , "5, 10");
                    }
                }  else if (shape === 'vee') {
                    currNode = nested.polygon("0,10 20,-10 0,30  -20,-10") ;
                    currNode.x(node.renderedPosition('x'));
                    currNode.y(node.renderedPosition('y'));
                    
                    currNode.fill({color : node.style('background-color') , opacity : node.style('background-opacity') });        
                    
                    currNode.style('stroke-width' , node.style('border-width'));
                    currNode.style('stroke' , node.style('border-color'));
                    currNode.style('stroke-opacity' , node.style('border-opacity'));
                    
                    if (node.style('border-style') === "dotted") {
                        currNode.style('stroke-dasharray' , "1, 1");
                    } else if (node.style('border-style') === "dashed") {
                        currNode.style('stroke-dasharray' , "5, 10");
                    }
                }  else if (shape === 'rhomboid') {
                    currNode = nested.polygon("0,0 20,0 30,30 10,30 0,0") ;
                    currNode.x(node.renderedPosition('x'));
                    currNode.y(node.renderedPosition('y'));
                    
                    currNode.fill({color : node.style('background-color') , opacity : node.style('background-opacity') });        
                    
                    currNode.style('stroke-width' , node.style('border-width'));
                    currNode.style('stroke' , node.style('border-color'));
                    currNode.style('stroke-opacity' , node.style('border-opacity'));
                    
                    if (node.style('border-style') === "dotted") {
                        currNode.style('stroke-dasharray' , "1, 1");
                    } else if (node.style('border-style') === "dashed") {
                        currNode.style('stroke-dasharray' , "5, 10");
                    }
                } else {
                    var points = node.style('shape-polygon-points');
                    var pointArr = points.split(" ");
                    points = "" ;
                    for (var i=0 ; i < pointArr.length ;i++) {
                        points += pointArr[i] * 20;
                        if (i % 2 !== 0) {
                            points += ",";
                        } else {
                            points += " " ;
                        }
                    }
                    currNode = nested.polygon(points) ;
                    currNode.x(node.renderedPosition('x'));
                    currNode.y(node.renderedPosition('y'));
                    
                    currNode.fill({color : node.style('background-color') , opacity : node.style('background-opacity') });        
                    
                    currNode.style('stroke-width' , node.style('border-width'));
                    currNode.style('stroke' , node.style('border-color'));
                    currNode.style('stroke-opacity' , node.style('border-opacity'));
                    
                    if (node.style('border-style') === "dotted") {
                        currNode.style('stroke-dasharray' , "1, 1");
                    } else if (node.style('border-style') === "dashed") {
                        currNode.style('stroke-dasharray' , "5, 10");
                    }
                }
                
                var label = nested.text(node.style('label'));
                label.font({
                    family : node.style('font-family'),
                    size : node.style('font-size'),
                    opacity : node.style('text-opacity'),
                    color : node.style('color'),
                    weight : node.style('font-weight'),
                    transform : node.style('text-transform'),
                    margin : node.style('text-margin-x')
                });
                
                // x and y position of the label
                var string = node.style('height') ;
                var height = string.substring(0,string.length - 2) ;
                
                if (node.style('text-valign') === 'top') {
                    label.y(node.renderedPosition('y') - height );
                } else if (node.style('text-valign') === 'center') {
                    label.y(node.renderedPosition('y'));
                } else {
                    label.y(node.renderedPosition('y') + height );
                }
                
                var string = node.style('width') ;
                var width = string.substring(0,string.length - 2) ;
                
                if (node.style('text-halign') === 'left') {
                    label.x(node.renderedPosition('x') - width );
                } else if (node.style('text-halign') === 'center') {
                    label.x(node.renderedPosition('x'));
                } else {
                    label.x(node.renderedPosition('x') + width );
                }
                
                
            }

    if( typeof module !== 'undefined' && module.exports ){ // expose as a commonjs module
        module.exports = register;
    }

    if( typeof define !== 'undefined' && define.amd ){ // expose as an amd/requirejs module
        define('cytoscape-svg-convertor', function(){
            return register;
        });
    }

    if( typeof cytoscape !== 'undefined' ){ // expose to global cytoscape (i.e. window.cytoscape)
        register( cytoscape );
    }

})();

