import { res_3, res_2, res_1, testArea, btnValue } from "../anchors.js";

localStorage.getItem('');
localStorage.setItem('', '');
localStorage.removeItem('')
localStorage.clear('');
localStorage.length;

// What is needed.
// 1) Charactor count
//2)  words per minute types ((Number of words typed/Time taken) * 60)
//3)  Accuracy per session. Accuracy = (Error strokes/Correct strokes)* 100%

class My_storage {
    constructor(charactorCount, totalKeyStrokes) {
        this.charactorCount = charactorCount
        this.totalKeyStrokes = totalKeyStrokes
    }

    save_data(key, value) {
        if (key == undefined || value == undefined) return console.log('no items to be saved');

        let savedItems = localStorage.setItem(String(key), String(value));

        console.log('successfully saved')
        return savedItems;
    }

    get_save_item(key) {
        let result = localStorage.getItem(String(key));
        if (result == null) return console.log('This item does not exist');

        console.log(`Here are your items. ${result}`);
        return result;
    }
    remove_stored_Item(key) {
        if (this.get_save_item(key) == null) return console.warn('Item not found');

        localStorage.removeItem(String(key));

        console.log(`Item removed`);
    }

    stored_data_count() {
        let result = localStorage.length;
        if (result <= 0) return console.info('No stored entries found');
        console.log(`You have ${result} entrie(s)`)

        return result;
    }
    clear_your_data() {
        let count = this.stored_data_count();
        return (count <= 0) ? localStorage.clear() : console.warn('Your storage is empty');
    }
}

let newStorage = new My_storage();

newStorage.save_data();
newStorage.get_save_item();

newStorage.remove_stored_Item();
newStorage.clear_your_data()

newStorage.stored_data_count();



export { newStorage }