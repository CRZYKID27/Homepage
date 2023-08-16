    function hasClassName(inElement, inClassName)
        {
            var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)');
            return regExp.test(inElement.className);
        }

    function setZoomLevel(zoomLevel) {
                document.body.style.zoom = zoomLevel;
        }
        
        setZoomLevel('50%');

        function sleep(milliseconds) {
            const date = Date.now();
            let currentDate = null;
            do {
            currentDate = Date.now();
            } while (currentDate - date < milliseconds);
        }
        
        function addClassName(inElement, inClassName)
        {
            if (!hasClassName(inElement, inClassName))
                inElement.className = [inElement.className, inClassName].join(' ');
        }

        function removeClassName(inElement, inClassName)
        {
            if (hasClassName(inElement, inClassName)) {
                var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)', 'g');
                var curClasses = inElement.className;
                inElement.className = curClasses.replace(regExp, ' ');
            }
        }

        function toggleClassName(inElement, inClassName)
        {
            if (hasClassName(inElement, inClassName))
                removeClassName(inElement, inClassName);
            else
                addClassName(inElement, inClassName);
        }
        
        function toggleBackfaces()
        {
        var backfacesVisible = document.getElementById('backfaces').checked;
        var shape = document.getElementById('shape');
        if (backfacesVisible)
            addClassName(shape, 'backfaces');
        else
            removeClassName(shape, 'backfaces');
        }

        sleep(2500);
            var shape = document.getElementById('shape');
            if (hasClassName(shape, 'cube')) {
                removeClassName(shape, 'cube');
                addClassName(shape, 'ring');
            } 
            else {
                removeClassName(shape, 'ring');
                addClassName(shape, 'cube');
            }
        
            var stage = document.getElementById('stage');
            if (hasClassName(shape, 'ring'))
                stage.style.webkitTransform = 'translateZ(-200px)';
            else
                stage.style.webkitTransform = '';
