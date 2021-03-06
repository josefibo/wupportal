<?php
namespace App\Controller;

use App\Controller\AppController;
use Cake\ORM\TableRegistry;

/**
 * Tags Controller
 *
 * @property \App\Model\Table\TagsTable $Tags
 *
 * @method \App\Model\Entity\Tag[] paginate($object = null, array $settings = [])
 */
class TagsController extends AppController
{

	/** @return array Fields to use for filter  */
	protected function fieldsTofilter()
	{
		return [
			'name'
		];
	}

	/**
	 * Add method
	 *
	 * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
	 */
	public function add()
	{
		// var_dump($user); exit;
		$request = $this->request->input('json_decode');
		$query = $this->table()->find()->contain($this->contain());
		$query->where([$this->name . '.name' => $request->name]);

		$result = $query->first();
		return $result
			? $this->ResponseHandler->responseSuccess($result)
			: parent::add();
	}

	public function initialize()
	{
		parent::initialize();
		$this->Auth->allow(['view','list', 'index']);
	}

	public function isAuthorized($user)
	{
		if ($this->isSuperuser($user)) return true;

		switch ($this->request->getParam('action')) {
			case 'add':
				return $this->isApprovedProvider($user['id']);
			default:
				return parent::isAuthorized($user);
		}
	}
}
