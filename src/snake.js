const NORTH = 'N',
    SOUTH = 'S',
    WEST = 'W',
    EAST = 'E';

export default {
    body: [
        {x:0, y:0},
        {x:1, y:0},
        {x:2, y:0}
    ],
    direction: EAST,
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

        // Check collide with self


        return false;
    },
    move() {
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
