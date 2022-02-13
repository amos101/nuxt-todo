import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const todoRef = db.collection('todos')

export const state = () => ({
  todos: []
})

export const actions = {
  // 初期化
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('todos', todoRef)
  }),
  // 追加
  add: firestoreAction((context, name) => {
    if (title.trim()) {
      todoRef.add({
        name: name,
        done: false,
        created: firebase.firestore.FieldValue.serverTimestanp()
      })
    }
  }),
  // 削除
  remove: firestoreAction((context, id) => {
    todoRef.doc(id).delete()
  }),
  // ステータス更新
  toggle: firestoreAction((context, todo) => {
    todoRef.doc(todo.id).update({
      status: !todo.done
    })
  })
}

// 日付の昇順でソート
export const getters = {
  orderdTodos: (state) => {
    return _.orderBy(state.todos, 'date', 'asc')
  }
}