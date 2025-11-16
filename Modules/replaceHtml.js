module.exports = replaceHtml = (template, product) => {
    let output = template.replace('{{%image%}}', product.image);
    output = output.replace('{{%name%}}', product.name);
    output = output.replace('{{%series%}}', product.series);
    output = output.replace('{{%id%}}', product.id);
    return output;
}