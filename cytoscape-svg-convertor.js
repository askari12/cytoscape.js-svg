;(function(){ 'use strict';

    // registers the extension on a cytoscape lib ref
    var register = function( cytoscape ){

    if( !cytoscape ){ return; } // can't register if cytoscape unspecified

        cytoscape( 'core', 'svgConvertor', function(){
            var cy = this;
            cy.jpeg() ;
            
            // your extension impl...
            
            /*
            
            //takes the collection of nodes
            var collection = cy.elements('node');
            
            /*
            cy.nodes().on("click", function(){
                collection = collection.add(this);
                var node1 = collection[0] ;
                window.alert(node1.position("x"));    
                });
            
           var xValues = 0;
           for (var i = 0 ; i < collection.length ; i++) {
               xValues = xValues + collection[i].position("x") + "  ";
           }
           
            window.alert(xValues);
            
            */
    
            // makes an svg element
            var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            var svgNS = svg.namespaceURI;

            var rect = document.createElementNS(svgNS,'rect');
            rect.setAttribute('x',5);
            rect.setAttribute('y',5);
            rect.setAttribute('width',500);
            rect.setAttribute('height',500);
            rect.setAttribute('fill','#95B3D7');
            svg.appendChild(rect);
            //test the svg element on the screen
            document.body.appendChild(svg);


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
