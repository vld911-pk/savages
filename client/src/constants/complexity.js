//Numbers

export function numberComplexityList(level){
    switch(level){
        case 1 : return [1,20];
        case 2 : return [10,99];
        case 3 : return [100,999];
        default : return 'game has only 3 levels';
    }
}