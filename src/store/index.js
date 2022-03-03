import { ElNotification } from "element-plus";
import "element-plus/es/components/notification/style/css";
import { pushDocument2Collection, setDocument2Collection, getDocumentObject } from "@/db.js";


import { reactive, readonly } from "vue";
const state = reactive({
    loading_status: {},
    history: [],
    cart_id: null,
    cart_list: null
});

const chageLoadingStatusHandler = (loading_event, status) => {
    state.loading_status[loading_event] = status;
};

const setHistory = (item) => {
    state.history = item
}


const getCartList = () => {
    if (state.cart_id) {
        getDocumentObject(['cart', state.cart_id]).then((data) => {
            state.cart_list = data ? data.products : {}
        })
    }
}

const setCartId = (id) => {
    state.cart_id = id;
    window.localStorage.setItem("cart_id", id)
}
const pushCart = (item, callback) => {
    // state.cart_list.push(item)
    state.cart_list = state.cart_list ?? {}
    let product = state.cart_list[item.product_id]
    if (!state.cart_list[item.product_id]) {
        product = state.cart_list[item.product_id] = {
            product_id: item.product_id,
        };
    }

    let product_spec = product[item.product_spec.id]
    if (!product_spec) {
        product_spec = product[item.product_spec.id] = {
            product_spec: item.product_spec,
            count: item.count
        };
    } else {
        product_spec['product_spec'] = item.product_spec
        product_spec['count'] += item.count
    }


    if (!state.cart_id) {
        // 如果還沒有購物車就新增一下
        console.log("如果還沒有購物車就新增一下");
        pushDocument2Collection(["cart"], { products: state.cart_list }).then((cart_id) => {
            setCartId(cart_id);
            _callback()
        })
    } else {
        // 有購物車就更新一下
        console.log("有購物車就更新一下");
        setDocument2Collection(["cart"], { id: state.cart_id, products: state.cart_list }).then(() => {
            _callback()
        })
    }

    const _callback = () => {
        if (callback) {
            callback()
        }
        ElNotification({
            title: "成功通知",
            message: "已成功加入購物車",
            type: "success",
            offset: 60,
            duration: 1300
        });
    }

}


const editCart = (product_id, spec_id, count, callback) => {

    // let product = state.cart_list[item.product_id]
    // let product_spec = product[item.product_spec.id]
    // product_spec['count'] = item.count

    if (!product_id || !spec_id) {
        return false
    }
    state.cart_list[product_id][spec_id]['count'] = count

    setDocument2Collection(["cart"], { id: state.cart_id, products: state.cart_list }).then(() => {
        _callback()
    })


    const _callback = () => {
        if (callback) {
            callback()
        }
        ElNotification({
            title: "成功通知",
            message: "已更新購物車",
            type: "success",
            duration: 600
        });
    }
}

const deleteCartItem = (product_id, spec_id, callback) => {
    delete state.cart_list[product_id][spec_id];
    setDocument2Collection(["cart"], { id: state.cart_id, products: state.cart_list }, false).then(() => {
        _callback()
    })
    const _callback = () => {
        if (callback) {
            callback()
        }
        ElNotification({
            title: "成功通知",
            message: "已更新購物車",
            type: "success",
            duration: 600
        });
    }
}

export default {
    state: readonly(state),
    chageLoadingStatusHandler,
    setHistory,
    getCartList,
    setCartId,
    pushCart,
    deleteCartItem,
    editCart
};