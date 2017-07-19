const NORTH = 'N',
    SOUTH = 'S',
    WEST = 'W',
    EAST = 'E';

export default {
    mapSize: null,
    body: [
        {x:0, y:0},
        {x:1, y:0},
        {x:2, y:0}
    ],
    direction: EAST,
    setMapSize(size) {
        if (Number.isInteger(size) && size > 0) {
            this.mapSize = size;
        }
    },
    changeDirection(newDirection) {
        // Check new direction is valid
        if (newDirection.length !== 1 || this.direction === newDirection || (NORTH + SOUTH + WEST + EAST).indexOf(newDirection) === -1) {
            return;
        }

        // Check new direction is not opposite of current direction
        if (['NS', 'SN', 'WE', 'EW'].indexOf(newDirection + this.direction) !== -1) {
            return;
        }

        this.direction = newDirection;
    },
    newHead(oldHead) {
        switch (this.direction) {
            case NORTH:
                return {
                    x: oldHead.x,
                    y: oldHead.y - 1
                };
            case SOUTH:
                return {
                    x: oldHead.x,
                    y: oldHead.y + 1
                };
            case WEST:
                return {
                    x: oldHead.x - 1,
                    y: oldHead.y
                };
            case EAST:
                return {
                    x: oldHead.x + 1,
                    y: oldHead.y
                };
        }
    },
    isFood(head) {
        return false;
    },
    isCollided(head) {
        // Check collide with map
        if (head.x < 0 || head.x >= this.mapSize) {
            return true;
        }
        if (head.y < 0 || head.y >= this.mapSize) {
            return true;
        }

        // Check collide with self


        return false;
    },
    move() {
        if (this.mapSize === null) {
            return false;
        }

        // Remove the tail
        this.body.splice(0, 1);

        // Calculate new head position
        let head = this.newHead(this.body[this.body.length - 1]);

        if (this.isFood(head)) {
            // Remove food

            // Add head

        } else {
            // Is new position collide with boundary or body?
            if (this.isCollided(head)) {
                return false;
            }
        }

        // If no collision detected, add new head to body
        this.body.push(head);

        return true;
    }
};
