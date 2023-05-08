import {TypeUtils} from "@potentii/type-utils";

export default class BlogPost{
	/**
	 * @type {string}
	 */
	id;
	/**
	 * @type {string}
	 */
	title;
	/**
	 * @type {?string}
	 */
	description;
	/**
	 * @type {?string}
	 */
	previewImageUrl;
	/**
	 * @type {string[]}
	 */
	tags;



	/**
	 *
	 * @param {string} id
	 * @param {string} title
	 * @param {?string} description
	 * @param {?string} previewImageUrl
	 * @param {string[]} tags
	 */
	constructor(id, title, description, previewImageUrl, tags) {
		TypeUtils.typeOf.checkValue('BlogPost.id', id, 'string', true);
		TypeUtils.typeOf.checkValue('BlogPost.title', title, 'string', true);
		TypeUtils.typeOf.checkValue('BlogPost.description', description, 'string', false);
		TypeUtils.typeOf.checkValue('BlogPost.previewImageUrl', previewImageUrl, 'string', false);
		TypeUtils.typeOf.checkArray('BlogPost.tags', tags, 'string', true, true);
		this.id = id;
		this.title = title;
		this.description = description;
		this.previewImageUrl = previewImageUrl;
		this.tags = tags;
	}



	/**
	 *
	 * @param {object|BlogPost} obj
	 * @return {?BlogPost}
	 */
	static from(obj){
		if(!obj)
			return null;

		return new BlogPost(
			obj.id,
			obj.title,
			obj.description,
			obj.previewImageUrl,
			obj.tags,
		);
	}
}