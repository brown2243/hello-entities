# stock-management

- User = 계정
- 매장과 계정의 분리가 필요할까?

- 사실상 자동발주는 결국 서비스에서 지원해주는 매장만 가능하다
- 결제를 우리가 받고, 그 돈으로 우리가 타 쇼핑몰에 결제를 해주는 방법을 사용한다면 url 과 옵션 수량 정보만 처리하게 해주면, 되겠지만 좀 급진적인 부분이 있음

1. `User`는 `Stock`을 가진다.
2. `AbstractStock`은 현실의 재고의 개념을 나타낸다.
   1. 딸기라는 `Stock`이 각 매장마다 row가 들어가야하지만
   2. 위 `Stock`은 딸기라는 개념을 나타내는 `AbstractStock`에 연동 된다.
   3. 그래서 이름에 유니크를 주면 좋을 것 같다.
   4. 재고 등록과 `OrderItem`의 추가, 변경, 삭제를 간편하게 하는 용도
3. `AbstractStock`는 `OrderItem`을 가진다.
   1. `Stock`에 직접 연결 하지 않는 이유는 N x M(`Stock` x `OrderItem`) 대신 N x 1 x M(`Stock` x `AbstractStock` x `OrderItem`) 위함
4. `OrderItem`은 `Distributor`를 가진다.
5. `OrderItem`의 발주 내역은 `PurchaseOrderItem`에 기록한다.
6. `StockInbound`는 입고 내역이다
   1. `OrderItem`는 `PurchaseOrderItem`를 거쳐 `StockInbound`로 들어온다
   2. 혹은 특정 `Stock`을 입고해서 들어온다.
7. `MenuItems`는 판매하는 상품이다.
8. `StockConsumption`은 `MenuItems`이 판매될때마다 소모 될 재고에 대한 테이블이다.
9. `SalesMenuItems`는 판매 되는 메뉴의 기록 테이블
10. `StockOutbound`는 출고/소모 내역이다
    1. `SalesMenuItems`에 `StockConsumption`으로 `Stock`의 양을 감소 시킨다.
