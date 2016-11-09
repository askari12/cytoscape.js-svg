;(function(){ 'use strict';

    // registers the extension on a cytoscape lib ref
    var register = function( cytoscape ){

    if( !cytoscape ){ return; } // can't register if cytoscape unspecified

        cytoscape( 'core', 'svgConvertor', function(){
            var cy = this; 
            
            // your extension impl...
            
            var nodes = cy.elements('node') ;
            //window.alert(nodes[0].position('x') + " " + nodes[0].position('y'));


            var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            var svgNS = svg.namespaceURI;
            
                        
            for (var i = 0 ; i < nodes.length ; i++) {
                var rect = document.createElementNS(svgNS,'rect');
                rect.setAttribute('x',nodes[i].position('x'));
                rect.setAttribute('y',nodes[i].position('y'));
                rect.setAttribute('width',nodes[i].width());
                rect.setAttribute('height',nodes[i].height());
                rect.setAttribute('fill','#95B3D7');
                svg.appendChild(rect);
                document.body.appendChild(svg);

                var e = document.createElement('script'); 
                if (window.location.protocol === 'https:') { 
                    e.setAttribute('src', 'https://rawgit.com/NYTimes/svg-crowbar/gh-pages/svg-crowbar.js'); 
                } else { 
                    e.setAttribute('src', 'http://nytimes.github.com/svg-crowbar/svg-crowbar.js'); 
                } 
                    e.setAttribute('class', 'svg-crowbar'); 
                    document.body.appendChild(e); 
                }

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
