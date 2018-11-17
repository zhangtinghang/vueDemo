/**
 * 策略对象
 */
let strategies = {
    isNonEmpty: function(value, errorMsg){
        if(value === ''){
            return errorMsg;
        }
    },
    minLength: function(value, length, errorMsg){
        if( value.length < length){
            return errorMsg;
        }
    },
    isMobile: function(value, errorMsg){
        if(!/(^1[35|8|][0-9]{9}$)/.test( value )){
            return errorMsg;
        }
    }
}

/**
 * Validator 类
 */
let Validator = function(){
    this.cache = [];
}

Validator.prototype.add = function( dom, rules ){
    let self = this;
    let i, rule;
    for( i = 0; rule = rules[ i++ ]; ){
        (function( rule ){
            let strategyAry = rule.strategy.split(':');
            let errorMsg = rule.errorMsg;
            
            self.catche.push(function(){
                let strategy = strategyAry.shift();
                strategyAry.unshift( dom.value );
                strategyAry.push( errorMsg );
                return strategies[ strategy ].apply( dom, strategyAry );
            })
        })(rule)
    }
};
Validator.prototype.start = function(){
    for( let i = 0, validatorFunc; validatorFunc = this.cache[ i++ ];) {
        let errorMsg = validatorFunc();
        if( errorMsg ){
            return errorMsg
        }
    }
}

/**
 * 校验规则添加
 */

let validataFunc = function(form){
    let validator = new Validator();
    validator.add( form.userName, [{
        strategy: 'isNonEmpty',
        errorMsg: '用户名不能为空'
    },{
        strategy: 'minLength:10',
        errorMsg: '用户名长度不能小于10位'
    }]);
    validator.add( form.password, [{
        strategy: 'minLength:6',
        errorMsg: '密码长度不能小于6位'
    }]);

    let errorMsg = validator.start();
    return errorMsg;
}

export default validataFunc
