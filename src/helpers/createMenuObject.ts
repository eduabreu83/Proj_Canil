type MenuOptions =  ''| 'all' | 'dogs' | 'cats' | 'fish';

export const createMenuObject = (activeMenu: MenuOptions ) => {
    let returnObject  = {
        all: false,
        dogs: false,
        cats: false,
        fish: false
    };

if (activeMenu !== '') {
        returnObject[activeMenu] = true;
    }   

    return returnObject;
}