console.log("####### Classes #######");
class Monster {
    constructor({ name, health }) {
        this.name = name;
        this.health = health;
        this._attr1 = "attribute 1";
        this._attr2 = "attribute 2";
    }
    
    get attr1() {
        return this.attr1;
    }
    set attr1(value) {
        this._attr1 = value;
    }
    get attr2() {
        return this.attr2;
    }
}
class Snake extends Monster {
    constructor(options) {
        super(options);
        this.nickname = options.nickname;
    }
    bite(snake) { 
        snake.health -= 10;
    }
}
const snake = new Snake({ name: "monsterName", health: 100, nickname: "pippoMonster" });
const snake2 = new Snake({ name: "monsterName2", health: 100, nickname: "pippoMonster2" });
snake.attr1 = "attribute 1 test";
snake.attr2 = "attribute 2 test"; // this action doesn't produce result because it doesn't exist the "setter" for "attr2"
snake.bite(snake2);
console.log(snake);
console.log(snake2);


class InventoryStore {
    /** the inventory categories */
    get categories() {
      return this._categories;
    }
  
    /** the inventory items */
    get items() {
      return this._items;
    }
  
    /** promise indicating whether the store has been initialized */
    get isInitialized() {
      return this._isInitialized;
    }
  
    constructor() {
      // define and initialize properties (which happen to be "private")
      this._categories = [];
      this._items = [];
  
      // load initial set of data
      this._isInitialized = this._load();
    }
  
    /**
     * Locates a specific item from inventory
     *
     * @param {string} trackingNumber the item's tracking number
     * @returns the inventory item with the given tracking number, or null
     */
    getItem(trackingNumber) {
      return this._items.find(x => x.trackingNumber === trackingNumber);
    }
  
    /**
     * Adds an item to inventory
     *
     * @param {InventoryItem} item the item to add to inventory
     * @returns {Promise<InventoryItem>} promise containing the updated item after it's been saved
     */
    addItem(item) {
      const errors = this.validateItem(item);
  
      if (errors.length) {
        return Promise.reject(errors);
      }
  
      const trackingNumber = Math.random()
        .toString(36)
        .substr(2, 9);
  
      item.trackingNumber = trackingNumber;
  
      this._items.push(item);
  
      return this._save().then(() => item);
    }
  
    /**
     * validate an inventory item
     *
     * @param {InventoryItem} item the inventory item to validate
     * @returns {ValidationError[]} an array of validation errors
     */
    validateItem(item) {
      let errors = [];
  
      function addError(field, message) {
        errors.push({ field, message });
      }
  
      //#region Validation logic applying to any/all types of inventory items
  
      if (item == null) {
        addError("", "item is null");
        return errors;
      }
  
      if (!item.type) {
        addError("type", "Please select a valid Category");
      }
  
      if (!item.name) {
        addError("name", "Name must be greater then 5 characters long");
      }
  
      if (!item.assignedTo) {
        addError("assignedTo", "Please select the person this is assigned to");
      }
  
      if (!item.subCategory) {
        addError("assignedTo", "Please select a Sub-Category");
      }
  
      //#endregion
  
      switch (item.type) {
        // Computer-specific validation
        case "computer":
          if (item.year > new Date().getFullYear()) {
            addError("name", "Please select a year (future years are not valid)");
          }
  
          if (!item.serialNumber) {
            addError("serialNumber", "Please specify a valid serial number");
          }
          break;
  
        // Furniture-specific validation
        case "furniture":
          if (!item.model) {
            addError(
              "model",
              "Please provide a model, serial number, or description"
            );
          }
  
          if (!item.manufacturer) {
            addError("manufacturer", "Please identify the item's manufacturer");
          }
          break;
      }
  
      return errors;
    }
  
    removeItem(item) {
      this._items.splice(this._items.findIndex(item), 1);
      return this._save();
    }
  
    //#region Private methods

    _load() {
      return Promise.all([
        getFromStorage("Categories"),
        getFromStorage("Inventory")
      ]).then(([categories, items]) => {
        this._categories = categories;
        this._items = items;
      });
    }
  
    _save() {
      return saveToStorage("Inventory", this._items);
    }
  
    //#endregion
  }