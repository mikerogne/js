module.exports = LinkedList;

function LinkedList() {
    var length = 0;
    var head   = null;

    function Node(element) {
        this.element = element;
        this.next    = null;
    }

    /**
     * Append element to end of the list.
     *
     * @param element
     */
    this.append = function (element) {
        var node = new Node(element), current;

        if (head === null) {
            head = node;
        } else {
            current = head;

            // Loop until we find last item.
            while (current.next) {
                current = current.next;
            }

            // Get last item and assign 'next' to node to make the link.
            current.next = node;
        }

        length++;
    };

    /**
     * Insert a new item at the specified position in the list.
     *
     * @param position
     * @param element
     */
    this.insert = function (position, element) {
        // Check for out-of-bounds values
        if (position >= 0 && position <= length) {
            var node    = new Node(element);
            var current = head;
            var previous;
            var index   = 0;

            if (position === 0) {
                node.next = current;
                head      = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current  = current.next;
                }

                node.next     = current;
                previous.next = node;
            }

            length++;

            return true;
        } else {
            return false;
        }
    };

    /**
     * Remove an item from a specified position in the list.
     *
     * @param position
     */
    this.removeAt = function (position) {
        // Check for out-of-bounds values
        if (position > -1 && position < length) {
            var current = head;
            var previous;
            var index   = 0;

            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current  = current.next;
                }

                // Link previous with current's next: skip it to remove.
                previous.next = current.next;
            }

            length--;

            return current.element;
        } else {
            return null;
        }
    };

    /**
     * Remove an item from the list.
     *
     * @param element
     */
    this.remove = function (element) {
        var index = this.indexOf(element);

        return this.removeAt(index);
    };

    /**
     * Returns the index of the element in the list. If the element is not in the list, returns -1.
     *
     * @param element
     */
    this.indexOf = function (element) {
        var current = head;
        var index   = 0;

        while (current) {
            if (element === current.element) {
                return index;
            }

            index++;
            current = current.next;
        }

        return -1;
    };

    /**
     * Returns true if the linked list does not contain any elements and false if the size of the
     * linked list is bigger than 0.
     */
    this.isEmpty = function () {
        return length === 0;
    };

    /**
     * Returns how many elements the linked list contains.
     */
    this.size = function () {
        return length;
    };

    this.toString = function () {
        var current  = head;
        var elements = [];

        while (current) {
            elements.push(current.element);
            current = current.next;
        }

        return elements.join(",");
    };

    this.getHead = function () {
        return head;
    };
}
