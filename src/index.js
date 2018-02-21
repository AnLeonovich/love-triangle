/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var triangles = 0;
    var firstLover, secondLover, thirdLover;
    preferences.unshift(0);
  
    for (var i=1; i < preferences.length; i++){
      
        firstLover = preferences[i];
        secondLover = preferences[firstLover];
        thirdLover = preferences[secondLover];
  
        if ( thirdLover == i){
            triangles +=1;
        }
    }
    
  return Math.floor(triangles / 3);
};
