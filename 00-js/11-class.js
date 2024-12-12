//자바스크립트는 prototype으로 객체 지향을 일부 구현
//ES6의 class문법은 prototype의 Syntax Sugar일 뿐이다

class Shape {
    //static
    static create(x, y) {return new Shape(x,y)}
    
    name = "Shape"; //-> ES7 확장표현
    //생성자
    constructor(x,y) {
        this.name = "Shape";    //인스턴스 속성-> ES6 방식
        this.move(x,y);
    }
    //move메서드
    move(x,y) {
        this.x = x;  //외부로부터 입력받은 x를 x에 할당
        this.y = y;
    }
    //area메서드
    area() {
        return 0;
    }
}

//인스턴스 생성
const s = new Shape(10,20);
console.log(s, s.area());


//상속
//Shape로부터 move메서드, x, y, name 속성 등을 상속
class Circle extends Shape {
    //생성자
    constructor(x, y, radius) {
        //x,y를 가지고 있는 shape의 생성자 가져오기
        super(x,y);     //부모 생성자 호출
        this.radius = radius;
    }
    area() {
        if (this.radius === 0) {
            //면적을 못구한다
            return super.area();
        }
        return this.radius ** 2 * Math.PI;  //PI의 r제곱
    }
}
const c = new Circle(10,20,30);
console.log(c,c.area());