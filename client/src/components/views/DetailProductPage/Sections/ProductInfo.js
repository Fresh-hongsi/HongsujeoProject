// 상품 상세 페이지에서 상품의 정보를 보여주는 파일
// add to cart 기능은 나중에 좋아하는 밥집들 찜해놓은 목록으로 만들어놓을 수 있을 듯

import React from 'react'
import { Button, Descriptions } from 'antd'; // 상품 상세 페이지에서 design을 위해 필요한 애들 import
//import { useDispatch } from 'react-redux';

function ProductInfo(props) {
    //const dispatch = useDispatch();

    // 즐겨찾기 버튼을 클릭했을 때 실행되어야 할 함수, 즐겨찾기를 모아둔 또 다른 페이지로 이동해야할 듯
    const clickHandler = () => {
        //필요한 정보를 Cart 필드에다가 넣어 준다.
        //dispatch(addToCart(props.detail._id))
    }

    return (
        <div>
            <Descriptions title="식당 정보">
                <Descriptions.Item label="Price">{props.detail.price}</Descriptions.Item>
                {/* 여기에 Sold, View 대신, 식당에 대한 다른 정보들 추가할 수 있음 (예를 들면, 음식의 분류라든지.., 별점이라든지.. 그렇게 하려면 DB에 별점을 저장해야..)
                별점의 평균을 매길 수 있는 쿼리문도 필요할듯*/}
                <Descriptions.Item label="Sold">{props.detail.sold}</Descriptions.Item>
                <Descriptions.Item label="View">{props.detail.views}</Descriptions.Item>
                <Descriptions.Item label="Description">{props.detail.description}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            {/* 즐겨찾기 추가하는 버튼 생성, 그에 대한 페이지는 따로 만들어야 할 듯 */}
        {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger" onClick={clickHandler}>
                    즐겨찾기 추가
                </Button>
            </div> 일단 보류 */}


        </div>
    )
}

export default ProductInfo