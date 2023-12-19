String.prototype.trim=function(){
    return this.replace(/(^\s*)|(\s*$)/g, "");
}
String.prototype.ltrim=function(){
    return this.replace(/(^\s*)/g,"");
}
String.prototype.rtrim=function(){
   return this.replace(/(\s*$)/g,"");
}

jQuery(document).ready(function($) {
    //ajax提交form
    $('body').delegate('.ajax-form', 'submit', function(e) {
        e.preventDefault();
        var formValues = $(this).serialize();
        var form = $(this);
        $.ajax({
            url: $(this).attr('action') ? $(this).attr('action') : document.URL,
            type: $(this).attr('method'),
            data: formValues,
            beforeSend: function(e) {
                //禁用提交按钮，防止重复提交
                form.find(":submit").attr("disabled", true);
                return true;
            },
            success: function(data) {
                //成功状态，下面的是服务器返回的，数据库操作的状态
                var type;
                if (data.status === 1) {
                    type = "success";
                } else {
                    type = "error";
                    alert(data.info);
                    form.find(":submit").attr("disabled", false);
                }
                if (type === 'success') {
                    //有提示信息，应该先显示提示信息，再跳转url
                    if(data.info){
                        alert(data.info);
                        if(data.url){
                            window.location = data.url;
                        }
                        else{
                            window.location.reload();
                        }
                    }
                    //无提示信息，有跳转url，则直接跳转
                    else if(data.url){
                        window.location = data.url;
                    }
                }
                form.find(":submit").attr("disabled", false);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log('error2');
                alert($(XMLHttpRequest.responseText).find('h1').text());
                form.find(":submit").attr("disabled", false);
            },
        });
    });
    
    $('.ajax-link').on('click', function(){
        var url = $(this).data('url');
        ajaxlink($(this), url);
    });

    if ($('.file_upload').length) {
        $('.file_upload').fileupload({
            dataType: 'json',
            done: function(e, data) {
                var result = data.result;
                $parentWrapper = $(this).parents('.upload-wrapper');
                if (result.Status == 1) {
                    if (result.Data.url)
                        $parentWrapper.find('.file_name').html('<a href="' + result.Data.url + '">' + result.Data.title + '</a>');
                    $parentWrapper.find('.file_id').val(result.Data.file_id);
                } else {
                    $parentWrapper.find('p.upload_error').text(result.info);
                }
            },
            progress: function(e, data) {
                $(this).parents('.upload-wrapper').find('p.upload_error').text('');
                $progress = $(this).parents('.upload-wrapper').find('.progress');
                if ($progress.not('.in')) {
                    $progress.addClass('in');
                }
                var progress = parseInt(data.loaded / data.total * 100, 10);
                $progress.children('.progress-bar').css(
                    'width',
                    progress + '%'
                );
                if (progress === 100) {
                    progress = 0;
                    setTimeout(function() {
                        $progress.removeClass('in').children().css(
                            'width',
                            progress + '%'
                        );
                    }, 1000);
                };
            }
        });
    }
    if ($('.image_upload').length) {
        $('.image_upload').fileupload({
            dataType: 'json',
            done: function(e, data) {
                var result = data.result;
                $parentWrapper = $(this).parents('.upload-wrapper');
                if (result.Status == 1) {
                    if (result.Data.url)
                        $parentWrapper.find('.image_pic').attr('src', result.Data.url);
                    $parentWrapper.find('.image_id').val(result.Data.file_id);
                } else {
                    $parentWrapper.find('p.upload_error').text(result.info);
                }
            },
            progress: function(e, data) {
                $(this).parents('.upload-wrapper').find('p.upload_error').text('');
                $progress = $(this).parents('.upload-wrapper').find('.progress');
                if ($progress.not('.in')) {
                    $progress.addClass('in');
                }
                var progress = parseInt(data.loaded / data.total * 100, 10);
                $progress.children('.progress-bar').css(
                    'width',
                    progress + '%'
                );
                if (progress === 100) {
                    progress = 0;
                    setTimeout(function() {
                        $progress.removeClass('in').children().css(
                            'width',
                            progress + '%'
                        );
                    }, 1000);
                };
            }
        });
    }

});

function ajaxlink($this, url) {

    if (typeof url == 'string') {
        $.ajax({
            url: url, //与此php页面沟通 
            beforeSend: function() {
                //禁用提交按钮，防止重复提交
                $this.attr('disabled', true);
                return true;
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.readyState + XMLHttpRequest.status + XMLHttpRequest.responseText);
                $this.attr('disabled', false);
            },
            success: function(data) {
                if (data.status === 1) {
                    type = "success";
                    alert(data.info);
                } else {
                    type = "error";
                    alert(data.info);
                    
                    if(data.url.length > 0){
                        window.location = data.url;
                    }
                }
                if (type === 'success') {
                    //成功则跳转到返回的网址
                    setTimeout(function() {
                        window.location = data.url;
                    }, 300);
                } else {
                    $this.attr('disabled', false);
                }
            }
        });
    }
}

function ajaxlinkNoRefresh($this, url) {

    if (typeof url == 'string') {
        $.ajax({
            url: url, //与此php页面沟通 
            beforeSend: function() {
                //禁用提交按钮，防止重复提交
                $this.attr('disabled', true);
                return true;
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $this.attr('disabled', false);
                alert(XMLHttpRequest.readyState + XMLHttpRequest.status + XMLHttpRequest.responseText);
            },
            success: function(data) {
                if (data.status === 1) {
                    type = "success";
                    alert(data.info);
                } else {
                    type = "error";
                    alert(data.info);
                    $this.attr('disabled', false);
                }
                if (type === 'success') {

                } else {
                    $this.attr('disabled', false);
                }
            }
        });
    }
}

/*
     * 封装加载更多方法
     * @param1 点击的元素的标签(.xxx, #help)
     * @param2 赋值内容的标签
     * @param3 ajax地址
     * @param4 其他请求参数('&id=xx&type=xxx')
     *  */
function loadMore(click_dom, content_dom, url, other_param_str,callback){

    $(click_dom).on('click', function(e){
        e.preventDefault();
        var page = $(click_dom).data('page') || 1;
        var status = $(click_dom).data('status');
        if(status == 'false'){
            return false;
        }

        var str = $(click_dom).html();
        if(str =='没有新内容了'){
            return false;
        }
        page = parseInt(page) + 1;

        $.ajax({
            url: url,
            data: other_param_str ? 'page='+page+other_param_str : 'page='+page ,
            beforeSend: function() {
                $(click_dom).html('加载中');
                $(click_dom).data('status','false');

                return true;
            },
            success: function(data) {
                $(click_dom).data('status','true');
                //成功状态，下面的是服务器返回的，数据库操作的状态
                //  console.log(data);
                var html = $(data).find(content_dom).html();

                if(typeof(html) != 'undefined' && html.trim().length!=0){
                    $(content_dom).append(html);
                    $(click_dom).html('加载更多');
                    $(click_dom).data('page', page);
                }
                else{
                    $(click_dom).html('没有新内容了').data('no-data',true);
                }

                if (callback && typeof callback==='function'){
                    callback();
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log('error2');
                alert($(XMLHttpRequest.responseText).find('h1').text());
                $(click_dom).html('加载更多');
            },
        });
    });

}

//操作url参数的类
var jsUrlHelper = {
    getUrlParam : function(url, ref) {
        var str = "";
        // 如果不包括此参数
        if (url.indexOf(ref) == -1)
            return "";
        str = url.substr(url.indexOf('?') + 1);
        arr = str.split('&');
        for (i in arr) {
            var paired = arr[i].split('=');
            if (paired[0] == ref) {
                return paired[1];
            }
        }
        return "";
    },
    putUrlParam : function(url, ref, value) {
        // 如果没有参数
        if (url.indexOf('?') == -1)
            return url + "?" + ref + "=" + value;
        // 如果不包括此参数
        if (url.indexOf(ref) == -1)
            return url + "&" + ref + "=" + value;
        var arr_url = url.split('?');
        var base = arr_url[0];
        var arr_param = arr_url[1].split('&');
        for (i = 0; i < arr_param.length; i++) {
            var paired = arr_param[i].split('=');
            if (paired[0] == ref) {
                paired[1] = value;
                arr_param[i] = paired.join('=');
                break;
            }
        }
        return base + "?" + arr_param.join('&');
    },
    delUrlParam : function(url, ref) {
        // 如果不包括此参数
        if (url.indexOf(ref) == -1)
            return url;
        var arr_url = url.split('?');
        var base = arr_url[0];
        var arr_param = arr_url[1].split('&');
        var index = -1;
        for (i = 0; i < arr_param.length; i++) {
            var paired = arr_param[i].split('=');
            if (paired[0] == ref) {
                index = i;
                break;
            }
        }
        if (index == -1) {
            return url;
        } else {
            arr_param.splice(index, 1);
            return base + "?" + arr_param.join('&');
        }
    }
};




