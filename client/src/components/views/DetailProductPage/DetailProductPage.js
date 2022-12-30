// 등록한 상품의 상세정보를 볼 수 있는 페이지

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Row, Col } from 'antd';
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';
import Comments from './Sections/Comments';
//import Favorite from './Sections/Favorite';

function DetailProductPage(props) {

  //const productId = props.match.params.productId
  const { productId } = useParams(); 
  const variable = {  productId: productId }

  const [Product, setProduct] = useState([]) // 상품 설정
  const [CommentLists, setCommentLists] = useState([]) // 댓글 설정

  useEffect(() => {
    // DB에서 상품을 가져오기 위한 request, 이 부분을 백엔드에 넘겨줌, 하나의 상품만 가져오기 때문에 type=single
    // axios.get이 실행된 결과는 return부분의 Product(props)에 들어가게 됨
    axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
        .then(response => {
            setProduct(response.data[0])
        })
        .catch(err => alert(err))
    
    // DB에서 모든 Comment 정보들을 가져오기, 백엔드의 comment.js 파일과 연관
    axios.post('/api/comment/getComments', variable)
        .then(response => {
          if (response.data.success) {
              console.log('response.data.comments',response.data.comments)
              setCommentLists(response.data.comments)
          } else {
              alert('Failed to get comment Info')
          }
        })
  }, [])
  
  // 새로운 댓글을 추가하면, 기존의 댓글에 더불어 함께 추가된 댓글이 보이도록 하기 위함 (concat)
  const updateComment = (newComment) => {
    setCommentLists(CommentLists.concat(newComment))
  }

  return (    
    <div style={{ width: '100%', padding: '3rem 4rem' }}>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1>{Product.title}</h1>
      </div>
      
      <br />

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button> Favorite </button>
        {/* 맨 위의 useState에서 Product를 여기에 사용,
        3 가지 props를 적용하여 Favorite.js에서 function Favorite(props)의 props에 적용됨
        productId와 userFrom는 Favorite.js에서 variables에서 사용됨, userId는 LoginPage.js와 관련 있음
        로그인된 유저의 정보가 localStorage에 저장되어있음 */}
        {/*<Favorite productInfo={Product} productId={productId} userFrom={localStorage.getItem('userId')} />*/}
      </div>

      <Row gutter={[16, 16]} >
          {/* 화면의 크기에 따라 이미지를 조정하기 위해 아래의 코드 입력*/}
          <Col lg={12} sm={24}>
              {/* ProductImage.js에서 가져온 내용을 위치시키는 곳 */}
              <ProductImage detail={Product} />
          </Col>
          <Col lg={12} sm={24}>
              {/* ProductInfo.js에서 가져온 내용을 위치시키는 곳 */}
              <ProductInfo detail={Product} />
          </Col>
          {/* Comments.js에서 props로 postId를 넘겨주기 위해, CommentLists=~~~의 코드를 작성 */}
          {/* refreshFunction은 결국 updateComment 함수를 실행하는 것 */}
          <Comments CommentLists={CommentLists} postId={productId} refreshFunction={updateComment} />
      </Row>

    </div>
  )
}

export default DetailProductPage