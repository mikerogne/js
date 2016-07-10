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
    this.insert = function (position, element) {};

    /**
     * Remove an item from a specified position in the list.
     *
     * @param position
     */
    this.removeAt = function (position) {};

    /**
     * Remove an item from the list.
     *
     * @param element
     */
    this.remove = function (element) {};

    /**
     * Returns the index of the element in the list. If the element is not in the list, returns -1.
     *
     * @param element
     */
    this.indexOf = function (element) {};

    /**
     * Returns true if the linked list does not contain any elements and false if the size of the
     * linked list is bigger than 0.
     */
    this.isEmpty = function () {};

    /**
     * Returns how many elements the linked list contains.
     */
    this.size = function () {};

    this.toString = function () {};

    this.print = function () {};
}
