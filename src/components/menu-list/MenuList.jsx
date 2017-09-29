require('./MenuList.less');
import { List, Icon } from 'antd-mobile';

function MenuList ({ menu, onChange }){ 

    function handleChange(key){
        onChange(key);        
    }

    return (
        <div>
            <List renderHeader={() => ''}>{
                menu?menu.map(function(item,key){
                    return ( 
                        <List.Item
                            thumb={<Icon type={require(`icon/${item.icon}.svg`)} color={item.color} />}
                            arrow="horizontal"
                            onClick={() => { handleChange(key) }}
                        >{item.title}</List.Item> 
                    )                    
                }):''
            }
            </List>
        </div>
    );
};

export default MenuList ;