const express = require('express');
const router = express.Router();
const { Favorite } = require('../models/Favorite'); // DB 모델을 가져오기

// client의 Favorite.js에서 설정한 endpointer와 맞추기
// express framework에서 제공하는 router 기능을 사용하고 있으므로,
// 여기에서는 /favoriteNumber 부분만 적어줘도 OK, 대신 index.js에서 그 앞부분에 해당하는 endpointer를 써줄 것!
router.post('/favoriteNumber', (req, res) => {  // 콜백 function을 통해 Favorite.js에서 variables에 담긴 정보들을 받을 수 있음
    // find 메소드를 통해 찾고싶은 상품 찾고, mongoDB에서 favorite 숫자를 가져오기 
    Favorite.find({ "productId": req.body.productId })
        // 쿼리 실행, info에는 몇 명이 좋아요를 눌렀는지에 대한 정보가 담김
        .exec((err, info) => {
            if (err) return res.status(400).send(err)
            // 그다음에 프론트에 다시 숫자 정보를 보내주기  
            res.status(200).json({ success: true, favoriteNumber: info.length })
        })
})



router.post('/favorited', (req, res) => {
    // 내가 이 상품을 Favorite 리스트에 넣었는지에 대한 정보를 DB에서 가져오기
    // "내가" 이 상품에 대해 좋아요를 눌렀는지 확인하기위해 userFrom을 가져오는 것
    Favorite.find({ "productId": req.body.productId, "userFrom": req.body.userFrom })
        // info가 비어있다면 ( [] 상태 ) -> 내가 아직 Favorite 리스트에 상품을 넣지 않은 것임
        .exec((err, info) => {
            if (err) return res.status(400).send(err)
            // 그다음에   프론트에  다시   숫자 정보를 보내주기  

            let result = false; // 아직 Favorite List에 넣지 않은 상황
            if (info.length !== 0) {
                result = true   // Favorite List에 넣은 상황으로 바꿔줌
            }

            res.status(200).json({ success: true, favorited: result })
        })
})








router.post('/removeFromFavorite', (req, res) => {

    Favorite.findOneAndDelete({ productId: req.body.productId, userFrom: req.body.userFrom })
        .exec((err, doc) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, doc })
        })

})




router.post('/addToFavorite', (req, res) => {

    const favorite = new Favorite(req.body)

    favorite.save((err, doc) => {
        if (err) return res.status(400).send(err)
        return res.status(200).json({ success: true })
    })

})




router.post('/getFavoredProduct', (req, res) => {

    Favorite.find({ 'userFrom': req.body.userFrom })
        .exec((err, favorites) => {
            if (err) return res.status(400).send(err)
            return res.status(200).json({ success: true, favorites })
        })

})

router.post('/removeFromFavorite', (req, res) => {

    Favorite.findOneAndDelete({ productId: req.body.productId, userFrom: req.body.userFrom })
        .exec((err, result) => {
            if (err) return res.status(400).send(err)
            return res.status(200).json({ success: true })
        })

})



module.exports = router;