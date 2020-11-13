<template>
    <div class="container">
        <div class="title-area">
            <a 
                :href="html_url"
                target="_blank">
                <font-awesome-icon 
                    icon="tag"/>
                {{tag_name}}
            </a>
        </div>
        <div class="header-area">
            <div class="header-area-title">
                <div class="info-icon">
                    <font-awesome-icon 
                        icon="info"
                        style="color: white;"/>
                </div>
                <b style="margin-left: 5px;">Release Info</b>
            </div>
            <div style="margin-top: 10px;">
                <span>
                    <a
                        :href="author.html_url" 
                        target="_blank">
                        <font-awesome-icon 
                            icon="user"/>
                        <span><b style="margin-left: 5px;">Author:</b> @{{author.login}}</span><br />
                    </a>
                </span>
                <span>
                    <font-awesome-icon 
                        icon="calendar"/>
                    <span>
                        <b style="margin-left: 5px;">
                            Published:
                        </b> 
                        <span style="font-size: .7rem;">
                            {{published_at}}
                        </span>
                    </span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tag_name: {
            default: '',
            required: true
        },
        html_url: {
            default: '/',
            required: true
        },
        author: {
            default: {},
            required: true
        },
        published_at: {
            default: '',
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    color: black;
}
.container {
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 250px;
    height: auto;
    border: 1px solid gray;
    margin: 10px;
    border-radius: 10px;
    background: #CCCFCA;
}
.title-area {
    width: 100%;
    text-align: left;
    font-weight: bold;
    border-bottom: 1px solid gray;
    a {
        color: #00779C;
    }
}
.header-area {
    width: 100%;
    text-align: left;
    margin-top: 10px;
}
.info-icon {
    background: black;
    padding: 5px;
    border-radius: 100%;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.header-area-title {
    display: flex;
    align-items: center;
}
</style>