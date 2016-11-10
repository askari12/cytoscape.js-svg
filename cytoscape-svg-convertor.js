;(function(){ 'use strict';

    // registers the extension on a cytoscape lib ref
    var register = function( cytoscape ){

    if( !cytoscape ){ return; } // can't register if cytoscape unspecified

        cytoscape( 'core', 'svgConvertor', function(){
            var cy = this; 
            
            // your extension impl...
           
            // It makes all the shapes of the nodes.
            function nodeShape() {
                var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                var svgNS = svg.namespaceURI;
                
                // ellipse
                var ellipse = document.createElementNS(svgNS , "ellipse") ;
                ellipse.setAttribute("cx" , 50) ;
                ellipse.setAttribute("cy" , 50) ;
                ellipse.setAttribute("rx" , 15) ;
                ellipse.setAttribute("ry" , 15) ;
                ellipse.setAttribute("fill" , "red") ;
                svg.appendChild(ellipse) ;
                
                // rectangle
                var rect = document.createElementNS(svgNS,'rect');
                rect.setAttribute('x',70);
                rect.setAttribute('y',50);
                rect.setAttribute('width',50);
                rect.setAttribute('height',50);
                rect.setAttribute('fill','#95B3D7');
                svg.appendChild(rect);
                
                // round rectangle
                var round_rect = document.createElementNS(svgNS,'rect');
                round_rect.setAttribute('x',130);
                round_rect.setAttribute('y',50);
                round_rect.setAttribute('width',50);
                round_rect.setAttribute('height',50);
                round_rect.setAttribute('rx' , 50) ;
                round_rect.setAttribute('ry' , 10) ;
                round_rect.setAttribute('fill','#95B3D7');
                svg.appendChild(round_rect);
                
                // triangle
                var triangle = document.createElementNS(svgNS,'polygon');
                triangle.setAttribute('points',"140 , 100  90,60 150 , 50");
                triangle.setAttribute("fill" , "red") ;
                svg.appendChild(triangle);
                
                //hexagon
                var hexagon = document.createElementNS(svgNS , 'polygon') ;
                hexagon.setAttribute('points', "117,90 100,80 83,90 83,110 100,120 117,110") ;
                hexagon.setAttribute("stroke" , "red") ;
                hexagon.setAttribute("stroke-width" , 5)
                svg.appendChild(hexagon);
                
                document.body.appendChild(svg) ;
            }
            nodeShape() ;

            return this; // chainability
        } );

    };

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
