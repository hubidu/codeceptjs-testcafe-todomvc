let Helper = codecept_helper;

const toString = sel => {
    if (typeof(sel) === 'string') return sel
    if (typeof(sel) === 'object') {
        return sel.value
    }
}

class CustomHelper extends Helper {

    async hover(selector) {
        let helper = this.helpers.TestCafe;

        await helper.t.hover(toString(selector))
    }
}

module.exports = CustomHelper;