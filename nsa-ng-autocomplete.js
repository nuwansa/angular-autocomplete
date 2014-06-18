angular.module('ng-nsa',[]).
directive('nsaAutoComplete',function()
{
	return {
				restrict : 'EA',
				scope : {source : '='},
				link : function(scope,element,attrib)
				{
					element.autocomplete({
						source: scope.source,
						messages: {
						noResults: '',
						results: function() {}
								}
						});
				}
			}
}
);