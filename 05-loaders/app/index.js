/**
 * Created by apple on 2017/3/16.
 */
require('./app.css');

import _ from 'lodash';
function component() {
    var element = document.createElement('p');
    element.innerHTML = _.join(['Hello ','webpack'],'');
    return element;

}

document.body.appendChild(component());