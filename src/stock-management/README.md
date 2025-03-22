# stock-management

- User = 계정
- 매장과 계정의 분리가 필요할까?

- 사실상 자동발주는 결국 서비스에서 지원해주는 매장만 가능하다
- 결제를 우리가 받고, 그 돈으로 우리가 타 쇼핑몰에 결제를 해주는 방법을 사용한다면 url 과 옵션 수량 정보만 처리하게 해주면, 되겠지만 좀 급진적인 부분이 있음

1. `User`는 `Stock`을 가진다.
2. `Stock`는 `OrderItem`을 가진다.
3. `OrderItem`은 `Distributor`를 가진다.
4. `Stock`는 `ExampleStock`을 가진다.
   1. 재고는 개인 매장에 속하는 개념으로 수량을 들고 있음
   2. 재고 등록과 `OrderItem`의 추가, 변경, 삭제를 간편하게 하는 용도
   3. 사용자가 `Stock`는 `OrderItem`을 조회 할때, 개인이 `Stock`에 등록한 `OrderItem`과 `ExampleStock`의 `OrderItem`을 같이 조회한다
   4. `ExampleStock`의 특정 프렌차이즈에 속한 `OrderItem`들은 특정 프렌차이즈에게만 보여줄 수 있어야 함
